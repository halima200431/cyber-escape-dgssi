"""Optional full browser test: pip install playwright; playwright install chromium."""
import subprocess, time, os, pathlib, mimetypes
from urllib.parse import urlparse
from playwright.sync_api import sync_playwright, expect
root=pathlib.Path(__file__).resolve().parents[1]
server=subprocess.Popen(['python','-m','http.server','8765','--bind','127.0.0.1'],cwd=root,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
try:
 time.sleep(.7)
 with sync_playwright() as p:
  executable=os.environ.get('CHROMIUM_PATH') or ('/usr/bin/chromium' if pathlib.Path('/usr/bin/chromium').exists() else None)
  browser=p.chromium.launch(headless=True,executable_path=executable,args=['--no-sandbox'])
  ctx=browser.new_context(viewport={'width':1440,'height':900})
  origin='http://127.0.0.1:8765/'
  if os.environ.get('INTERCEPT_FILES'):
   origin='https://escape.test/'
   def route_file(route):
    path=root / urlparse(route.request.url).path.lstrip('/')
    if path.is_file(): route.fulfill(status=200,body=path.read_bytes(),content_type=mimetypes.guess_type(path)[0] or 'application/octet-stream')
    else: route.fulfill(status=404,body='Not found')
   ctx.route('https://escape.test/**',route_file)
  errors=[]
  def page(path):
   pg=ctx.new_page();pg.on('pageerror',lambda e:errors.append(str(e)));pg.goto(origin+path);return pg
  home=page('index.html');home.get_by_role('heading',name='The ScreenConnect Files.').wait_for()
  admin=page('admin.html?mode=demo');admin.locator('#demo-login').click();admin.locator('#room-code').fill('ATLAS7');admin.get_by_role('button',name='Créer une salle',exact=True).click();admin.locator('#control').wait_for()
  deck=page('presentation.html?mode=demo&room=ATLAS7');deck.get_by_text('Projection synchronisée').wait_for()
  student=page('play.html?mode=demo&room=ATLAS7');student.locator('#name').fill('Les Lavandes');student.get_by_role('button',name='Entrer dans la mission').click();student.locator('#game').wait_for()
  student2=page('play.html?mode=demo&room=ATLAS7');student2.locator('#name').fill('Les Orchidées');student2.get_by_role('button',name='Entrer dans la mission').click();student2.locator('#game').wait_for()
  admin.locator('#ranking').get_by_text('Les Orchidées').wait_for()
  for i,idx in enumerate([11,20,27,34]):
   admin.locator('#jump').select_option(str(idx));admin.locator('#open-round').click();student.locator('#answer-form').wait_for();student2.locator('#answer-form').wait_for()
   if i==0:
    student.locator('input[name=single][value="2"]').check();student2.locator('input[name=single][value="0"]').check()
   elif i==1:
    for j,v in enumerate([1,2,0]):student.locator(f'input[name=item{j}][value="{v}"]').check()
    for j,v in enumerate([0,1,2]):student2.locator(f'input[name=item{j}][value="{v}"]').check()
   elif i==2:
    for j,v in enumerate([0,1,0,1]):student.locator(f'input[name=item{j}][value="{v}"]').check()
    for j,v in enumerate([0,0,1,1]):student2.locator(f'input[name=item{j}][value="{v}"]').check()
   else:
    for j in [2,5,1,4,0,3]:student.locator(f'[data-order="{j}"]').click()
    for j in [5,2,4,1,0,3]:student2.locator(f'[data-order="{j}"]').click()
   student.locator('#submit').click();student2.locator('#submit').click();student.get_by_role('heading',name='Transmission reçue.').wait_for();student2.get_by_role('heading',name='Transmission reçue.').wait_for();admin.locator('#live-results').get_by_text('2 réponse(s) · 1 correcte(s)').wait_for();admin.locator('#close-round').click();admin.wait_for_timeout(100)
  admin.locator('#ranking').get_by_text('100/100').wait_for();admin.locator('#jump').select_option('35');admin.locator('#code').fill('7392');admin.locator('#unlock button').click();student.get_by_role('heading',name='Access granted.').wait_for();deck.get_by_role('heading',name='ACCESS GRANTED').wait_for();admin.locator('#ranking').get_by_text('0/100',exact=True).wait_for()
  with admin.expect_download() as d:admin.locator('#export').click()
  assert d.value.suggested_filename=='resultats-ATLAS7.csv'
  for i in range(40):
   # all slides can now be reached in sync mode
   admin.locator('#jump').select_option(str(i));expect(deck.locator('#counter')).to_contain_text(f'{i+1}/40')
  if os.environ.get('CAPTURE_DIR'):
   out=pathlib.Path(os.environ['CAPTURE_DIR']);out.mkdir(exist_ok=True,parents=True)
   home.screenshot(path=str(out/'home.png'),full_page=True)
   admin.screenshot(path=str(out/'admin.png'),full_page=True)
   student.screenshot(path=str(out/'student.png'),full_page=True)
   admin.locator('#jump').select_option('17');deck.wait_for_timeout(300);deck.screenshot(path=str(out/'presentation.png'),full_page=True)
  print('PASS: 2 teams, four rounds, correct score 100/0, vault, synchronized 40 slides and CSV export.');assert not errors,errors
  browser.close()
finally:
 server.terminate();server.wait(timeout=5)
