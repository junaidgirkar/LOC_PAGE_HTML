var coll = document.getElementsByClassName("collapsible");
var j;

for (j = 0; j < coll.length; j++) {
  coll[j].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      for(var k = 0; k < j; k++){
        document.getElementsByClassName("collapsible")[k].nextElementSibling.style.maxHeight=null;
        document.getElementsByClassName("collapsible")[k].classList.remove("active");
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
      }
    } 
  });
}