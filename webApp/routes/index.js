var express = require('express');
var router = express.Router();
const { exec } = require('child_process');


let setup = [];
setup['routerprefix'] = '/color';
setup['param'] = 'color_in';
setup['value0'] = 'colorReq';
setup['route'] = setup['routerprefix'] + '/:' + setup['param'];

function grabColor(req, res, next){
  res.locals[setup['value0']]=eval('req.params.' +setup['param']);
  next();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post(setup['route'], grabColor, function(req, res, next){
  let option = res.locals[setup['value0']];
  let cmd = 'cd /home/pi/rpi_ws281x/python;sudo PYTHONPATH=".:build/lib.linux-armv7l-2.7" python3 examples/strandShiva.py '+option;
  console.log(cmd)
  exec(cmd, (err,stdout,stderr)=>{
    if(err){
      console.log('Error'+err)
      return;
    }
    console.log('stdout: ${stdout}');
    console.log('stderr: ${stderr}');
  }); 
  console.log(req.url)
  res.sendStatus(200);
});

module.exports = router;
