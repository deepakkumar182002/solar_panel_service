@echo off
echo.
echo ==========================================
echo  DevanshiRenewables - Safe Git Push
echo ==========================================
echo.

REM Check if .env.local exists and remove from staging if accidentally added
if exist .env.local (
    echo Checking for .env.local in git staging...
    git reset .env.local >nul 2>&1
    echo ✓ .env.local secured from git tracking
)

REM Add all changes except sensitive files
echo Adding changes to git...
git add .
git reset .env.local >nul 2>&1

REM Check if there are changes to commit
git diff --staged --quiet
if %errorlevel% equ 0 (
    echo ✓ No new changes to commit
    echo Repository is up to date!
) else (
    echo Committing changes...
    git commit -m "Update: %date% %time%"
    
    echo Pushing to GitHub...
    git push origin main
    
    if %errorlevel% equ 0 (
        echo.
        echo ✓ Successfully pushed to GitHub!
        echo ==========================================
    ) else (
        echo.
        echo ✗ Push failed! Check the error above.
        echo ==========================================
    )
)

echo.
pause