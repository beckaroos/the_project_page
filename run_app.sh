cd frontend && npm run dev && cd ..
python manage.py makemigrations backend
python manage.py migrate
python manage.py runserver

