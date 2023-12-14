@ECHO OFF

set DIR=%~dp0

set COMMAND=%DIR%gradlew

IF EXIST "%DIR%gradlew" (
  %COMMAND% %*
) ELSE (
  gradlew %*
)

