
# React Router 6
El objetivo es armar un sitio con las siguientes rutas
- Inicio == '/'
- Nosotros == '/nosotros/
- Productos == '/productos'
    - Detalle del producto == '/productos/:id'
    - Formulario para agregar o editar un producto == '/productos/nuevo' o '/productos/editar/:id'


## Pasos con V6

- Instalar la librería 
`npm i react-router-dom`

- Englobar la aplicación en el componente <BrowserRouter />
    - Importar BrowserRouter
    - Agregar la etiqueta envolviendo a componente <App /> en archivo index.js 

- Agregar los links de navegación con componente <Link /> de *react-router-dom*, estableciendo la ruta al hacer click con la prop to="/ruta"

    <Link to="/nosotros"> Texto del link </Link>

- Para vincular rutas con componentes utilizamos componente <Routes /> (en la v5 era switch) para englobar lo que va a renderizar contenido dinámico. Recibe como parámetro una propiedad element={ <Componente /> } y path="/ruta"

- Para rutas anidadas (rutas hijas, por ejemplo "/productos/nuevo"). Componente <Route />
    <Route path="/productos" element={ <PantallaContenedora /> } />

        <Route path="/nuevo" element={ <FormularioProducto /> }>

    </Route>

    !! P**or defecto esto no va a renderizar rutas hijas**

- En componente padre (en el ejemplo de arriba, sería PantallaContenedora, agregar <Outlet /> para especificar donde se va a renderizar el contenido dinámico de las rutas hijas.

## Diferencias principales con la v5
- NO se usa <Switch>, en su lugar <Routes>
- NO se usa <Component>, en su lugar element={} dentro de <Route>
- NO se usa exact en el path de Route 
- Anidar rutas (agregar rutas hijas a un path padre)
    - Especificar rutas hijas dentro de un componente <Route > padre
    - En el componente padre de las mismas agregar <Outlet /> para renderizar el contenido de las rutas hijas