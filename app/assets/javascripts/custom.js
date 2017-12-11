$(() => {
  var subButton = document.querySelector("input[type=submit]");
  if (subButton) {
    subButton.addEventListener('click', e => {
      if ($('input[type=file]')[0].files.length > 9) {
        e.preventDefault();
        alert("You can select only 9 images");
      }
    })
  }
  //gallery show
  $('.gallery-grid').children().each(function(idx){
    this.setAttribute('dataset-id',idx);
    var that = $(this);
    $(this).on('click',()=>show(that))
  })

  $('.firstImg').attr('dataset-id',0);
  $('.firstImg').on('click',e=>{show($(e.target))})

  function show(that){
    var bigDiv = $("<div class='bigDiv'></div>");
    var divImg = $(`<div class='bigImg'></div>`);
    divImg.css('background-image', that.css('background-image'));
    var nextElem = $("<span class='nextElem'>&gt;</span>");
    var prevElem = $("<span class='prevElem'>&lt;</span>");
    var exitElem = $("<span class='exitElem'>x</span>");
    bigDiv.append(divImg);
    bigDiv.append(nextElem);
    bigDiv.append(prevElem);
    bigDiv.append(exitElem);
    $('body').append(bigDiv);
    var dataId = that.attr('dataset-id')
    //nextElem
    nextElem.on('click',()=>{
      if(dataId+1<$('.gallery-grid').children().length){
        dataId++;
        divImg.css('background-image',$('.gallery-grid').children().eq(dataId).css('background-image'))
      }
      else{
        dataId=0;
        divImg.css('background-image',$('.gallery-grid').children().eq(dataId).css('background-image'))
      }
    })
    //prevElem
    prevElem.on('click',()=>{
      if(dataId-1>=0){
        dataId--;
        divImg.css('background-image',$('.gallery-grid').children().eq(dataId).css('background-image'))
      }
      else{
        dataId=$('.gallery-grid').children().length-1;
        divImg.css('background-image',$('.gallery-grid').children().eq(dataId).css('background-image'))
      }
    })
    //exitElem
    exitElem.on('click',()=>{
      bigDiv.remove();
    })
  }
})
