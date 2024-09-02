var audio = new Audio('assets/sentmessage.mp3');

var contactString = `
  <div class='social'>
    <a target='_blank' href='tel:+919756317620'>
      <div class='socialItem' id='call'>
        <img class='socialItemI' src='images/phone.svg' alt='Phone'/>
        <label class='number'>9756317620</label>
      </div>
    </a>
    <a href='mailto:bhanu.tripathi12@gmail.com'>
      <div class='socialItem'>
        <img class='socialItemI' src='images/gmail.svg' alt='Email'/>
      </div>
    </a>
    <a target='_blank' href='https://github.com/bhanutripathi12'>
      <div class='socialItem'>
        <img class='socialItemI' src='images/github.svg' alt='GitHub'/>
      </div>
    </a>
    <a target='_blank' href='https://wa.me/919756317620'>
      <div class='socialItem'>
        <img class='socialItemI' src='images/whatsapp.svg' alt='WhatsApp'/>
      </div>
    </a>
    <a target='_blank' href='https://t.me/bhuwnesh_tripathi12'>
      <div class='socialItem'>
        <img class='socialItemI' src='images/telegram.svg' alt='Telegram'/>
      </div>
    </a>
    <a target='_blank' href='https://instagram.com/bhanu_tripathi121'>
      <div class='socialItem'>
        <img class='socialItemI' src='images/instagram.svg' alt='Instagram'/>
      </div>
    </a>
    <a target='_blank' href='https://www.linkedin.com/in/bhuwnesh-tripathi-b9a2a5294/' rel='noopener noreferrer'>
      <div class='socialItem'>
        <img class='socialItemI' src='images/linkedin.svg' alt='LinkedIn'/>
      </div>
    </a>
  </div>
`;

var resumeString = `
  <img src='images/resumeThumbnail.png' class='resumeThumbnail'/>
  <div class='downloadSpace'>
    <div class='pdfname'>
      <img src='images/pdf.png'/>
      <label>bhuwnesh tripathi resume.pdf</label>
    </div>
    <a href='assets/bhuwnesh tripathi resume.pdf' download='bhuwnesh_tripathi_resume.pdf'>
      <img class='download' src='images/downloadIcon.svg'/>
    </a>
  </div>
`;

var addressString = `
  <div class='mapview'>
    <iframe 
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' 
      class='map' 
      style='border:0;' 
      allowfullscreen='' 
      loading='lazy'>
    </iframe>
  </div>
  <label class='add'>
    <address>
      'Motahaldu'<br>
      Haldwani<br>
      Nainital, Uttarakhand, INDIA 263139
    </address>
  </label>
`;

function startFunction() {
    setLastSeen();
    waitAndRespond("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = `Last seen today at ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

function toggleFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    x.style.display = (x.style.display === 'flex') ? 'none' : 'flex';
}

function isEnter(event) {
    if (event.keyCode === 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value.trim();
    if (ti === "") {
        return;
    }
    
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    dateLabel.innerText = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    myDiv.className = "sent";
    greendiv.className = "green";
    dateLabel.className = "dateLabel";
    
    greendiv.innerText = ti;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    
    setTimeout(() => waitAndRespond(ti), 1500);
    input.value = "";
    playSound();
}

function waitAndRespond(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Typing...";
    
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage(`
                  Hello there 👋🏻,<br><br>
                  My name is <span class='bold'><a class='alink'>Bhuwnesh Tripathi</a>.</span><br><br>
                  I am a Computer Science student at <span class='bold'>Graphic Era Hill University 👨🏻‍💻📚</span><br><br>
                  I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>
                  Send <span class='bold'>'help'</span> to know more about me.<br>
                `);
            }, 2000);
            break;
        case "help":
            sendTextMessage(`
              <span class='sk'>
                Send Keyword to get what you want to know about me...<br>e.g<br>
                <span class='bold'>'skills'</span> - to know my skills<br>
                <span class='bold'>'resume'</span> - to get my resume<br>
                <span class='bold'>'education'</span> - to get my education details<br>
                <span class='bold'>'address'</span> - to get my address<br>
                <span class='bold'>'contact'</span> - to get ways to connect with me<br>
                <span class='bold'>'projects'</span> - to get details of my projects<br>
                <span class='bold'>'clear'</span> - to clear conversation<br>
                <span class='bold'>'about'</span> - to know about this site
              </span>
            `);
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage(`
              <span class='sk'>
                I am currently pursuing a Bachelor of Computer Applications degree in Computer Science Engineering.<br><br>
                I can comfortably write code in the following languages:<br>
                <span class='bold'>Java<br>C<br>XML<br>C++<br>Python<br>CSS<br>HTML</span><br><br>
                I've experience with the following:<br>
                <span class='bold'>Android Development<br>MERN Stack<br>POSTMAN API<br>Android Studio<br>MySQL</span><br><br>
                <span class='bold'>Favourite IDE: VSCode</span>
              </span>
            `);
            break;
        case "education":
            sendTextMessage(`
              I am currently pursuing a Bachelor of Computer Applications degree in Computer Science.<br>
              Passing Year: 2025<br><br><br>
              I have completed my Intermediate from Ever Green Sr. Sec School<br>
              Passing Year: 2020
            `);
            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage(`
              🛠️💻 This portfolio website is built using HTML, CSS, and JavaScript from SCRATCH!<br><br>
              👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://instagram.com/bhanu_tripathi121/'>
              <span class='bold'>Bhuwnesh Tripathi</span></a> ❤️
            `);
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage(`
              You want to check my projects? Then just jump into my GitHub Account.<br><br>
              <div class='social'>
                <a target='_blank' href='https://github.com/bhanutripathi12'>
                  <div class='socialItem'>
                    <img class='socialItemI' src='images/github.svg' alt='GitHub'/>
                  </div>
                </a>
              </div>
            `);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey, I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndRespond('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    dateLabel.className = "dateLabel";
    dateLabel.innerText = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
    
    myDiv.className = "received";
    greendiv.className = "grey";
    greendiv.innerHTML = textToSend;
    
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    
    playSound();
}

function playSound() {
    audio.play();
}
