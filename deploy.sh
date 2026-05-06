host=""
dest=""
if [ "$1" = "prod" ]
then
    echo "Deploying to production"
    host="164.92.157.191"
    dest="mcserver"
else
    echo "Unknown deploy target: $1"
    exit 1
fi

rsync -av -e ssh --include-from=deploylist.txt ./ root@${host}:~/applications/${dest}