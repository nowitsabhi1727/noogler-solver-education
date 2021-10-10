const express=require('express');
const port=9999;
const path=require('path');

const app=express();
app.set('view engine','ejs');
app.set('index',path.join(__dirname,'index'));
app.use(express.urlencoded());
app.use(express.static('assets'));


var database=[
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'face recognistion',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"abhishek@gmail.com",
        password:"213545",
        name:"abhishek",
        year:'4th',
        branch:'cse',
        codechef:'5 star',
        codeforce:'master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'xsave',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'Cartoonify Image with Machine Learning',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'Iris Flowers Classification Project',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'mojify – Create your own emoji with Python',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'face recognistion',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'face recognistion',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'face recognistion',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'face recognistion',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'face recognistion',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    {
        email:"nitish@gmail.com",
        password:"12345",
        name:"nitish",
        year:'4th',
        branch:'cse',
        codechef:'6 star',
        codeforce:'candidate master',
        leetcode:'4 star',
        hackerrank:'7 star',
        webproject:'decode',
        github:'https://github.com/harshittpandey/friendreq-system',
        mlproject:'face recognistion',
        aiproject:'disease-finder',
        techStack:"competitive programming",
        discord:'@hacknts',
        location:'mansarovar',
        time:'10.15'
    },
    
]



app.get('/',function(req,res){

    return res.render('home',{
        title:"home"
    });
});
app.get('/main',function(req,res){
    return res.render('main',{
        title:'main'
    });
});
app.get('/register',function(req,res){
    return res.render('register',{
        title:'register'
    });
});
app.get('/technology',function(req,res){
    return res.render('technology',{
        title:'technology'
    });
});
app.get('/track',function(req,res){
    console.log("in track");
    res.redirect('/competitive');
});
app.get('/competitive',function(req,res){
    return res.render('competitive_track',{
        title:'competitive programming',
        database_competitive:database
    });
});
app.get('/datastructure',function(req,res){
    return res.render('datastructure_track',{
        title:'competitive programming',
        database_competitive:database
    });
});
app.get('/webdevelopment',function(req,res){
    return res.render('webdevelopment_track',{
        title:'competitive programming',
        database_competitive:database
    });
});
app.get('/machinelearning',function(req,res){
    return res.render('machinelearning_track',{
        title:'competitive programming',
        database_competitive:database
    });
});
app.get('/ai',function(req,res){
    return res.render('ai_track',{
        title:'competitive programming',
        database_competitive:database
    });
});
app.get('/travel',function(req,res){
    return res.render('travel',{
        title:'travel',
        database_travel:database
    });
})
app.get('/error',function(req,res){
    return res.render('error',{
        title:'error'
    });
});
app.post('/authentication',function(req,res){
    let formEmail=req.body.email;
    let formPassword=req.body.password;

    for(let i of database){
        let email=i.email;
        let password=i.password;
        // console.log("email: ",email);
        // console.log("password: ",password);
        if(email==formEmail && password==formPassword){
            return res.redirect('/main');
        }
    }
    return res.redirect('/error');
});
app.post('/newregister',function(req,res){
    console.log(req.body.email);
    console.log(req.body.password);
    database.push({
        email:req.body.email,
        password:req.body.password
    });
    return res.render('home');
});

app.listen('9999',function(err){
    if(err){
        console.log("server is down");
    }
    else{
        console.log("server is running");
    }
})