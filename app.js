const express = require('express');
const app = express();

var userRoute = require('./routers/users.route');
const port = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({
   extended: true
})) // for parsing application/x-www-form-urlencoded

// template engine
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('public'));


app.get('/', (req, res) => {
   res.render('index', {
      name: "Nguyễn Viết Linh"
   })
})


app.use('/users', userRoute);


// lang nghe cong port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));