$(document).ready(function () {
  /* aside - tab */
  $('.tab-cont').hide();
  $('.tab-cont:first').show();

  $('.tab>ul>li').click(function () {
    $('.tab-cont').hide();
    var activeTab = $(this).attr('rel');
    $('#' + activeTab).fadeIn();

    $('.tab>ul>li').removeClass('tab-active');
    $(this).addClass('tab-active');
  });

  /* textarea auto resizing */
  $('.message-setting__textarea').on('keyup', 'textarea', function (e) {
    $(this).css('height', 'auto');
    $(this).height(this.scrollHeight);
  });

  /* checkbox */
  $('.replace-send__group input:checkbox').change(function () {
    $(this).parent().toggleClass('replace-send__control--active');
  });

  /* input-number */
  $('.send-date__number__inner').each(function () {
    var spinner = $(this),
      input = spinner.find("input[type='number']"),
      btnUp = spinner.find('.send-date__number__btn--up'),
      btnDown = spinner.find('.send-date__number__btn--down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
  });

  $('.send-date__number__inner input:disabled').parent().addClass('send-date__number__inner--change');

  /* input-file */
  $(function () {
    // input file delete
    $('.file-btn__delete').on('click', function (e) {
      $(this).siblings('.file-btn').show();
      $(this).siblings('.file-name').html('').removeClass('hasFile');
      e.preventDefault();
    });

    //input file name
    $('.file-btn__input').on('change', function (e) {
      var filename;

      if (window.FileReader) {
        filename = $(this)[0].files[0].name;
      } else {
        filename = $(this).val().split('/').pop().split('\\').pop();
      }

      var $buttonFile = $(this).parents('.file-btn');

      $buttonFile.siblings('.file-name').html(filename).addClass('hasFile');

      e.preventDefault();
    });
  });

  /* PPT 13 swiper slide */
  /* 📌 DEV Check(2-1) js/main.js : Swiper style 변경 */
  let swiper = new Swiper('.preview-message__swiper', {
    slidesPerView: 1.4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  /* slide tab */
  $('.slide-tab-cont').hide();
  $('.slide-tab-cont:first').show();

  $('.slide-tab>ul>li').click(function () {
    $('.slide-tab-cont').hide();
    var activeTab = $(this).attr('rel');
    $('#' + activeTab).fadeIn();

    $('.slide-tab>ul>li').removeClass('slide-tab--active');
    $(this).addClass('slide-tab--active');
  });

  /* PPT20-21 변수값 추가 toggle */
  $('.variable-add__arrow').click(function () {
    $('.variable-add').toggleClass('variable-add--active');
  });

  /* 템플릿 선택 - tab */
  $('.template-select__tab-cont-wrap .template__tab-cont').hide();

  $('.template-select__tab>ul>li').click(function () {
    $('.template-select__tab-cont-wrap  .template__tab-cont').hide();
    var activeTab = $(this).attr('rel');
    $('#' + activeTab).show();

    $('.template-select__tab>ul>li').removeClass('tab-active');
    $(this).addClass('tab-active');
  });
});
