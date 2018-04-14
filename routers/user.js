module.exports = (Router)=>{
    Router.get('/',(req,res)=>{
        res.send('user');
    });
    
    return Router;
}