function index(req, res){
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM users', (err, users) =>{
            if(err){
                res.json(err);
            }
            res.render('options/index', { users });
        });
    });
}

function indexId(req, res){
    const id = req.params.id;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM users WHERE id=?', [id], (err, users)=>{
            if(err){
                res.json(err);
            }
            res.render('options/index', { users });
        });
    });
}

function create(req, res){
    res.render('options/create');
}

function save(req, res){
    const data = req.body;

    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO users SET ?', [data], (err, rows)=>{
            res.redirect('/index');
        });
    });
}

function edit(req, res){
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM users WHERE id=?', [id], (err, users)=>{
            if(err){
                res.json(err);
            }
            res.render('options/edit', { users });
        });
    });
}

function update(req, res){
    const id = req.params.id;
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('UPDATE users SET ? WHERE id = ?', [data, id], (err, rows)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/index');
        });
    });
}

function optiond(req, res){
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM users WHERE id=?', [id], (err, user)=>{
            if(err){
                res.json(err);
            }
            res.render('options/delete', { user });
        });
    });
}

function deleteu(req, res){
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        // console.log(id);
        conn.query('DELETE FROM users WHERE id = ?', [id], (err, user)=>{
            if(err){
                res.json(err);
            }
            res.redirect('/index');
        });
    })
}

module.exports = {
    index: index, 
    indexId: indexId,
    create: create,
    save: save,
    edit: edit, 
    update: update,
    optiond: optiond,
    deleteu: deleteu
}