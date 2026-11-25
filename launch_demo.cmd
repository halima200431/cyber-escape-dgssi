@echo off
cd /d "%~dp0"
where py >nul 2>nul
if errorlevel 1 (
  echo Python est requis. Installez Python ou utilisez un serveur HTTP local.
  pause
  exit /b 1
)
echo Ouvrez http://localhost:8000 dans votre navigateur.
echo Gardez cette fenetre ouverte. Ctrl+C pour arreter.
py -3 -m http.server 8000 --bind 127.0.0.1
