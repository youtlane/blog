import express from 'express' ;
let articlesInfos = [
    {
        name:'learn-react',
        upvotes: 0,
    },
    {
        name:'mongodb',
        upvotes:0,
    },
    {
        name:'learn-node',
        upvotes:0,
    }

]

const app = express();
app.use(express.json());//when it receive a request that has a jason body(payload) its going to parse that and make it available to us on request body

app.put('/api/articles/:name/upvote',(req , res) =>{
    // first know what article we wanna upvote
    const { name } = req.params;
    //find the corresponding article with that name 
    const article = articlesInfos.find(a => a.name === name);
    if (article){
        article.upvotes += 1;
        res.send(`the ${name} article now has ${article.upvotes}`);
    }else{
        res.send('that article doesn\'t exist');
    }
    

});

app.listen(8000 , () =>{
    console.log('we are listening nayhahahah');
});