@echo off
cd /d "%~dp0"
where py >nul 2>nul && (start "RMA Morse Hand Server" cmd /c "py -m http.server 5500" & timeout /t 2 >nul & start http://localhost:5500) || (start "RMA Morse Hand Server" cmd /c "python -m http.server 5500" & timeout /t 2 >nul & start http://localhost:5500)
