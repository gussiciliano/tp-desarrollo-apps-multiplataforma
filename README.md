# tp-desarrollo-apps-multiplataforma

Para levantar el proyecto basta con clonarlo y desde la carpeta raíz correr el comando 'docker compose up'

¡Importante! No estoy seguro de porqué, pero aveces los contenedores de la BD y el BE se levantan sin llegar a establecer la conexión. Si al entrar en la home no se visualiza nada, basta con entrar en el archivo 'index.js' del backend, agregar una línea, guardar, borrar la línea y volver a guardar. De esta forma se refresca el BE y se establece la conexión con la BD correctamente.

Aclaración: El profe mencionó que me debería tirar error algunos archivos, pero el proeycto me corre bien, lo que si pasa es que VSCode me tira un warning al abrir un archivo cualqueira.

ENTREGABLES:
Puntos mínimos de la app
   
● 2 Directivas estructurales (ngIf, ngFor)
- ngFor: Mirar los archivos 'listdevice.component.html', 'mediciones.page.html' y 'log-riegos.page.html'.
- ngIf: Mirar el archivo 'log-riegos.page.html'.

● 1 directiva de atributo (custom)
- Mirar el archivo 'highlight.directive.ts', la directiva se usa para colorear los bonotes de la vista 'listdevice.component.html' cuando se pasar el cursor por arriba. 

● 1 pipe custom
- Mirar el archivo 'formato-fecha.pipe.ts', el pipe se usa para las fechas de las vistas 'mediciones.page.html' y 'log-riegos.page.html'.

● 1 servicio para conectar a la API
- Mirar el archivo 'device.service.ts'.

● 1 Api en Express con comunicación a la base de datos
- Aplicación en la carpeta 'backend'. Re utilizada de lo visto en la materia anterior.

Endpoints:

- GET: http://localhost:8000/devices
- GET: http://localhost:8000/devices/:idDevice
- GET: http://localhost:8000/lastmessure/:idDevice
- POST: http://localhost:8000/logriegos => Recibe un Json de LogRiego, sin su id
- POST: http://localhost:8000/messures => Recibe un Json de Medicion, sin su id
- GET: http://localhost:8000/devices/:idDevice/messures/
- GET: http://localhost:8000/logriegos/:electrovalvulaId

Actualización del gráfico:
En el archivo 'device.page.ts' se tiene, dentro del constructor, un método de setInterval. La idea es que cada 2 minutos se aumente en 5 el valor de medición (simulando que se seca lentamente) y dicho se guarda en BD, actualiando también el gráfico.
Por otro lado, cuando se presiona el botón de abrir electroválvula se ejecuta la función abrirElectrovalvula(). Esta función también está en el archivo 'device.page.ts'. Lo que hace es poner en 0 en valor de la medición (porque se asumen que se riega el cultivo), guarda el log de riego y finalmente refresca el gráfico.


Capturas de pantalla:

Home:
<img width="1275" alt="Screen Shot 2023-04-17 at 20 21 37" src="https://user-images.githubusercontent.com/19696200/232631588-f36961d9-31d8-42ee-a56f-84961df4b705.png">

Dispositivo:
<img width="1235" alt="Screen Shot 2023-04-17 at 20 21 51" src="https://user-images.githubusercontent.com/19696200/232631576-6ee5cfa8-3461-46dd-82d4-4205a049812d.png">

Mediciones:
<img width="1262" alt="Screen Shot 2023-04-17 at 20 21 58" src="https://user-images.githubusercontent.com/19696200/232631565-d04ec6f7-6106-4de6-bd88-d4c10c96063f.png">

Log Riegos:
<img width="1246" alt="Screen Shot 2023-04-17 at 20 22 06" src="https://user-images.githubusercontent.com/19696200/232631545-5f15160f-8dd1-4259-bef8-4923119c24e4.png">
