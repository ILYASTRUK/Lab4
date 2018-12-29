/*



TARGET1*/

function getText() {
    let text = document.getElementById('typedText').value;
    let textcolor = document.getElementById('colorText').value;
    let newLine = document.createElement('div');
    let selectionPosition = document.getElementsByName('positionInList');
    newLine.innerHTML = text;
    newLine.onclick = removeDiv;
  
    function removeDiv() {
      list.removeChild(this);
    };
  
    Element.prototype.setAttributes = function(attrs) {
      for (var idx in attrs) {
        if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]) {
            this.style[prop] = attrs[idx][prop];
          }
        } else {
          this.setAttribute(idx, attrs[idx]);
        }
      }
    };
  
    newLine.setAttributes({
      'styles': {
        'backgroundColor': textcolor,
      },
    });
  
    for (let i = 0; i < selectionPosition.length; i++) {
      if (selectionPosition[i].type == "radio" && selectionPosition[i].checked) {
        list.appendChild(newLine);
      } else {
        list.insertBefore(newLine, list.firstChild);
      }
    }
  }
  
  function alertText() {
    let alrt = document.getElementById('list');
    let elems = alrt.children;
    let fullElem = new Array();
    elems = Array.prototype.slice.call(elems);
    for (let i = 0; i < elems.length; i++) {
      fullElem[i] = elems[i].textContent;
    }
    alert(fullElem.join());
  }


  /*
  

  
  TARGET2*/
  
  function addRectangle() {
    let newRectangle = document.createElement('div');
    newRectangle.innerHTML;
    let task2 = document.getElementById('task2');
    task2.appendChild(newRectangle);
  
    let r = Math.floor(Math.random() * (223));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    let widthNumber = getRandomInt(40, 150);
    let widthPX = widthNumber.toString(10) + 'px';
    let heightNumber = getRandomInt(40, 150);
    let heightPX = heightNumber.toString(10) + 'px';
  
    let leftNumber = getRandomInt(0, 600);
    let leftPX = leftNumber.toString(10) + 'px';
    let topNumber = getRandomInt(0, 300);
    let topPX = topNumber.toString(10) + 'px';
  
    Element.prototype.setAttributes = function(attrs) {
      for (var idx in attrs) {
        if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]) {
            this.style[prop] = attrs[idx][prop];
          }
        } else {
          this.setAttribute(idx, attrs[idx]);
        }
      }
    };
  
    newRectangle.setAttributes({
      'styles': {
        'height': heightPX,
        'width': widthPX,
        'backgroundColor': color,
        'left': leftPX,
        'top': topPX,
      },
    });
  
    newRectangle.setAttribute('class', 'rectitac');
  
    task2.onclick = function(event) {
      let target = event.target; 
      if (target.className != 'rectitac') return; 
      light(target); 
      target.style.zIndex = 7500;
    };
  }
  
  function moveRect(e) {
    let Rect = document.getElementById("highlight");
  
    let cs = window.getComputedStyle(Rect); 
  
    let left = parseInt(cs.left);
    let top = parseInt(cs.top);
  
    switch (e.keyCode) {
      case 37: 
        if (Rect.offsetLeft > 0)
          Rect.style.left = left - 20 + "px";
        break;
      case 38: 
        if (top > 0)
          Rect.style.top = top - 20 + "px";
        break;
      case 39: 
        if (left < document.documentElement.clientWidth - 100)
          Rect.style.left = left + 20 + "px";
        break;
      case 40: 
        if (top < document.documentElement.clientHeight - 100)
          Rect.style.top = top + 20 + "px";
        break;
    }
  
    
  
  }
  
  addEventListener("keydown", moveRect);
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let selectedDiv;
  
  function light(node) {
    if (selectedDiv) {
      selectedDiv.removeAttribute('id');
    }
    selectedDiv = node;
    selectedDiv.setAttribute('id', 'highlight');
  }


  /*
  
  
  
  TARGET3*/
  
  function addBlock() {
    let newRectangle = document.createElement('div');
    newRectangle.innerHTML;
    let task3 = document.getElementById('field3');
    task3.appendChild(newRectangle);
  
    let r = Math.floor(Math.random() * (223));
    let g = Math.floor(Math.random() * (256));
    let b = Math.floor(Math.random() * (256));
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
  
    let widthNumber = getRandomInt(40, 150);
    let widthPX = widthNumber.toString(10) + 'px';
    let heightNumber = getRandomInt(40, 150);
    let heightPX = heightNumber.toString(10) + 'px';
  
    let leftNumber = getRandomInt(0, 600);
    let leftPX = leftNumber.toString(10) + 'px';
    let topNumber = getRandomInt(0, 300);
    let topPX = topNumber.toString(10) + 'px';
  
    Element.prototype.setAttributes = function(attrs) {
      for (var idx in attrs) {
        if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
          for (var prop in attrs[idx]) {
            this.style[prop] = attrs[idx][prop];
          }
        } else {
          this.setAttribute(idx, attrs[idx]);
        }
      }
    };
  
    newRectangle.setAttributes({
      'styles': {
        'backgroundColor': color,
        'width': widthPX,
        'height': heightPX,
        'left': leftPX,
        'top': topPX,
  
      },
    });
  
    newRectangle.setAttribute('class', 'draggable')
  }
  
  document.onmousedown = function(e) {
    let elem = e.target; 
    if (elem.className && elem.className.indexOf('draggable') >= 0) { 
      elem.ondragstart = function() {
        return false
      }; 
      let coor = elem.getBoundingClientRect(); 
      let osx = e.offsetX; 
      let osy = e.offsetY; 
      elem.style.position = 'fixed'; 
      elem.style.top = coor.top + 'px';
      elem.style.left = coor.left + 'px'; 
  
      document.onmousemove = function(ev) { 
          let x = ev.clientX; 
          let y = ev.clientY; 
        
        elem.style.left = x - osx + 'px'; 
        elem.style.top = y - osy + 'px'; 
        removeSelect(); 
      }
    }
  }
  
  document.onmouseup = function(e) { 
    var elem = e.target; 
    document.onmousemove = function() {
      return false
    }; 
  }
  
  function removeSelect() { 
    var b = document.body; 
    b.style.webkitUserSelect = b.style.mozUserSelect = b.style.msUserSelect = 'none'; 
  } 
  
 
  function button1()
  {
    document.getElementById('one').style.display =  'block'; 
    document.getElementById('two').style.display =  'none'; 
    document.getElementById('three').style.display =  'none';
    document.getElementById('four').style.display =  'none';
  }
  function button2()
  {
    document.getElementById('two').style.display =  'block';
    document.getElementById('one').style.display =  'none'; 
    document.getElementById('three').style.display =  'none';
    document.getElementById('four').style.display =  'none';
  }
  function button3()
  {
    document.getElementById('two').style.display =  'none';
    document.getElementById('one').style.display =  'none'; 
    document.getElementById('three').style.display =  'block';
    document.getElementById('four').style.display =  'none';
  }
 