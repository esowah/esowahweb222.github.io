<!DOCTYPE html>
<html>
<head>
  <title> My First Website</title>

  <link rel="stylesheet" href="./css/style.css"> 

</head>
<body>
    <div class="hero">
        <nav>
            <h2 class = "logo">Portfo<span>lio</span></h2>
            <ul>
                <li><a href="./html/aboutme.html">About Me</a></li>
                <li><a href="https://www.senecacollege.ca/home.html">School</a></li>
                <li><a href="./html/tour.html">Tour</a></li>
                <li><a href="./html/images.html"">Images</a></li>
            </ul>           
        </nav>
        <div id="footer"> &copy; 2021 Ellis Sowah
        </div>

        <div class="loginBox">
            <img src="images/user.png" class="user">
            <h2>Login Here</h2>
            <form>
                <p>Email</p>
                <input type="email" name="" placeholder="Enter Email">
                <p>Password<p/>
                    <input type="password" name="" placeholder="Enter Password">
                    <input type="submit" name="" value="Sign In">
                    <a href="#"> Forget Password</a>
                    




            </form>
        </div>

</body>
</html>
                  <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="../css/images.css">
</head>
<body>

<div style="text-align:center">
  <h2>MyGallery</h2>
  <p>Click on the images below:</p>
</div>

<!-- The four columns -->
<div class="row">
  <div class="column">
    <img src="file:///D:/web2/finals/images/c2.jpg" alt="Nature" style="width:100%" class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/a1.jpg" alt="Snow" style="width:100%" class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/x.jpg" alt="Mountains" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/z.jpg" alt="Lights" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/fb.jpg" alt="Lights" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/h.jpg" alt="Lights" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/c.jpg" alt="Lights" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/e.jpg" alt="Lights" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/b2.jpg" alt="Lights" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
  <div class="column">
    <img src="file:///D:/web2/finals/images/f.jpg" alt="Lights" style="width:100%"  class="responsive" onclick="myFunction(this);">
  </div>
</div>

<div class="container">
  <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>
  <img id="expandedImg" style="width:50%">
  <div id="imgtext"></div>
</div>

<script>
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
</script>

</body>
</html>

                  
                  @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@500&family=Pacifico&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    font-size: 11px;
}
body{
    background-image: url(../images/oo.jpeg);
    background-position: 0 1000px;
    font-family: 'Pacifico', cursive;
}
.container{
    max-width: 1100px;
    margin: 0 auto;
    margin-top: 4rem;
    padding: 0 3rem;
    text-align: center;
}
h1{
    color: rgb(5, 5, 5);
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 10px;
    margin-bottom: 2rem;
}

h2{
    color: rgb(5, 5, 5);
    font-size: 25px;
     font-weight: 400;
}
span{
    color:rgb(245, 90, 116);
}
.image{
    margin-top: 50px;
    margin-bottom: 100px;
}
.class{
    width: 300px;
    margin:auto;
}
.class img{
    border-radius: 50%;
}
p{
    font-size: 25px;
    color: purple;
}
p2{
    font-size: 25px;
}

p3{
    font-size: 25px;
}
p4{
    font-size: 25px;
    color:purple;
}
.btn{
    background-color: #f9004d;
    color: white;
    text-decoration: none;
    border: 2px solid transparent;
    border-radius: 30px;
    padding: 10px 20px;
    font-weight: bolder;
    transition: transform .4s;
    align-items: center;
}
.btn:hover{
transform: scale(1.1);
}

.button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
  }
  
  .button:hover {
    background-color: #555;
  }
a{
    font-size: 13px;
}  
