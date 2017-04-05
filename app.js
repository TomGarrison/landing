$(document).ready(function() {

    $('#fathomsBtn').click(function() {
        $('.homeContent').addClass('hide')
        $('.learnContent').addClass('hide')
        $('.editorsContent').addClass('hide')
        $('.mailChimp').addClass('hide')
        $('.fathomsContent').removeClass('hide')
    })

    $('#learnBtn').click(function() {
        $('.homeContent').addClass('hide')
        $('.fathomsContent').addClass('hide')
        $('.editorsContent').addClass('hide')
        $('.mailChimp').addClass('hide')
        $('.learnContent').removeClass('hide')
    })

    $('#editorsBtn').click(function() {
        $('.homeContent').addClass('hide')
        $('.fathomsContent').addClass('hide')
        $('.learnContent').addClass('hide')
        $('.mailChimp').addClass('hide')
        $('.editorsContent').removeClass('hide')
    })

    $('#subscribeBtn').click(function() {
      $('.homeContent').addClass('hide')
      $('.fathomsContent').addClass('hide')
      $('.learnContent').addClass('hide')
      $('.editorsContent').addClass('hide')
      $('.mailChimp').removeClass('hide')
    })

    $('#contactBtn').click(function () {
      $('.homeContent').addClass('hide')
      $('.fathomsContent').addClass('hide')
      $('.learnContent').addClass('hide')
      $('.editorsContent').addClass('hide')
      $('.mailChimp').removeClass('hide')
    })

    $('#homeBtn').click(function () {
      $('.fathomsContent').addClass('hide')
      $('.learnContent').addClass('hide')
      $('.editorsContent').addClass('hide')
      $('.mailChimp').addClass('hide')
      $('.homeContent').removeClass('hide')

    })
})
