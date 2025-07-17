(function($) {

  /**
   * Scroll
   */
  Scroll = function(){
    this.init();
  }

  Scroll.prototype = {
    init: function() {
      var s  = this;
      $('.js-scroll').on('click.Scroll', function(e) {
        var tar = $(this).attr('href');
        // var adjust = $('#g-header').height();
        adjust = 0;
        var pos = tar != "#" && $(tar)[0] ? $(tar).offset().top - adjust : 0;
        // var pos = tar != "#" && $(tar)[0] ? $(tar).offset().top : 0;
        $('body, html').stop().animate({ scrollTop: Math.ceil(pos) }, { duration: 400, easing: 'swing' });
        return false;
      });


      // float
      $(window).on('scroll.Scroll resize.Scroll', function(){
        if ($(window).scrollTop() > $('.wrapper').offset().top - 100) {
          $('html').addClass('onfloat')
        }else {
          $('html').removeClass('onfloat')
        }
      });


    }
  }


  /**
   * Effect
   */
  Effect = function(){
    this.init();
  }

  Effect.prototype = {
    init: function() {
      var s  = this;

      this.eff();

      if (window.matchMedia('(min-width: 768px)').matches) {
        this.startCycle()
      }
    },

    eff: function() {
      // js-eff
      gsap.utils.toArray('.js-eff').forEach(target => {
        gsap.from(target, {
          autoAlpha: 0,
          duration: 1.0,
          x: 0,
          y: 60,
          opacity: 0,
          ease: 'power1.out',
          // ease: 'dxpo.out',
          // rotation: 180,
          scrollTrigger: {
            trigger: target,
            start: 'top bottom-=3%',
            // start: 'top bottom',
            end: 'bottom top',
            // markers: true,
            // scrub: true,
            // pin: true,
          }
        });
      });

      // js-eff-line
      gsap.utils.toArray('.js-eff-line').forEach(target => {

        var myDelay = $(target).data('eff-delay');
        gsap.from(target, {
          // autoAlpha: 0,
          transformOrigin: '0 0',
          delay : myDelay ? 0.8 + Number(myDelay) : 0.8,
          duration: 0.5,
          scaleX: 0,
          // y: 60,
          // opacity: 1,
          ease: 'power1.out',
          // ease: 'dxpo.out',
          // rotation: 180,
          scrollTrigger: {
            trigger: target,
            start: 'top bottom-=2%',
            // start: 'top bottom',
            end: 'bottom top',
            // markers: true,
            // scrub: true,
            // pin: true,
          }
        });
      });


      // gsap.fromTo('.plan_cnf', {
      //   scale: 0.7,
      //   opacity: 0
      // }, {
      //   // autoAlpha: 0,
      //   // transformOrigin: '0 0',
      //   delay : 0.3,
      //   duration: 0.8,
      //   scale: 1,
      //   // y: 60,
      //   opacity: 1,
      //   ease: 'back.inOut(1)',
      //   // ease: 'dxpo.out',
      //   // rotation: 180,
      //   scrollTrigger: {
      //     trigger: '.plan_cnf',
      //     start: 'top bottom-=2%',
      //     // start: 'top bottom',
      //     end: 'bottom top',
      //     // markers: true,
      //     // scrub: true,
      //     // pin: true,
      //   }
      // });


    },

    startCycle: function() {

      // js-eff-sc
      var eff_sc = gsap.timeline({
        delay : 1.3,
        repeat: 0,
        repeatDelay: 1.5,
        scrollTrigger: {
          trigger: '.js-eff-sc',
          start: 'top bottom-=20%',
          // start: 'top bottom',
          end: 'bottom top',
          // markers: true,
          // scrub: true,
          // pin: true,
        }
      })
      .fromTo('.js-eff-sc-line1', { width: 0 }, { width: '100%', duration: 0.6, ease: 'power2.in' })
      .add(function(){
        // gsap.timeline({ delay : 0.1})
        // .to('.js-eff-sc-img1', { scale: 1.1, duration: 0.2, delay : 0.0, ease: 'back.out(3)' })
        // .to('.js-eff-sc-img1', { scale: 1, duration: 0.5, delay : 0.0, ease: 'power1.out' })

        // gsap.timeline({ delay : 0.3})
        // .to('.js-eff-sc-img2', { scale: 1.1, duration: 0.2, delay : 0.0, ease: 'back.out(3)' })
        // .to('.js-eff-sc-img2', { scale: 1, duration: 0.5, delay : 0.0, ease: 'power1.out' })

        // gsap.timeline({ delay : 0.4})
        // .to('.js-eff-sc-img3', { scale: 1.1, duration: 0.2, delay : 0.0, ease: 'back.out(3)' })
        // .to('.js-eff-sc-img3', { scale: 1, duration: 0.5, delay : 0.0, ease: 'power1.out' })

        gsap.timeline({ delay : 0.1})
        .to('.js-eff-sc-img1', { scale: 0.95, duration: 0.2, delay : 0.0, ease: 'power1.out' })
        .to('.js-eff-sc-img1', { scale: 1.0, duration: 0.4, delay : 0.0, ease: 'back.out(15)' })

        gsap.timeline({ delay : 0.3})
        .to('.js-eff-sc-img2', { scale: 0.95, duration: 0.2, delay : 0.0, ease: 'power1.out' })
        .to('.js-eff-sc-img2', { scale: 1.0, duration: 0.4, delay : 0.0, ease: 'back.out(15)' })

        gsap.timeline({ delay : 0.5})
        .to('.js-eff-sc-img3', { scale: 0.95, duration: 0.2, delay : 0.0, ease: 'power1.out' })
        .to('.js-eff-sc-img3', { scale: 1.0, duration: 0.4, delay : 0.0, ease: 'back.out(15)' })
      })
      .fromTo('.js-eff-sc-arrow1', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.2, delay : 0.0, ease: 'expo.out' })
      .fromTo('.js-eff-sc-arrow2', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.2, delay : 0.0, ease: 'expo.out' })
      .fromTo('.js-eff-sc-arrow3', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.2, delay : 0.0, ease: 'expo.out' })
      .fromTo('.js-eff-sc-arrow4', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.2, delay : 0.0, ease: 'expo.out' })
      .fromTo('.js-eff-sc-line2', { width: 0 }, { width: '100%', duration: 0.6, delay : 0.0, ease: 'power3.out'})
      // .to('.js-eff-sc-line1, .js-eff-sc-arrow1, .js-eff-sc-arrow2, .js-eff-sc-arrow3, .js-eff-sc-arrow4, .js-eff-sc-line2',{ opacity: 0, duration: 0.5, delay : 2.0, ease: 'power1.out'})

    }
  }

  /**
   * Sim
   */

  // Sim = function(){
  //   this.init();
  // }
  // Sim.prototype = {
  //   init: function() {
  //     var s  = this;

  //     this.$sim = $('.js-sim');

  //     this.$result = this.$sim.find('.js-sim-result');
  //     // this.$resultTxt = this.$sim.find('.js-sim-result-txt');
  //     this.$resultPoint = this.$sim.find('.js-sim-result-point');

  //     this.$select1 = this.$sim.find('input:radio[name=sim1]');
  //     this.$select2 = this.$sim.find('input:radio[name=sim2]');
  //     this.$select3 = this.$sim.find('input:radio[name=sim3]');

  //     this.type = {
  //       'a1': { rate: 0.1, limit: 4000, txt: 'ahamo(d払い)' }
  //       // 'a2': { rate: 0.05, limit: 4000, txt: 'ahamo(d払い+dカード GOLD)' },
  //       // 'e1': { rate: 0.03, limit: 5000 },
  //       // 'e2': { rate: 0.05, limit: 5000 },
  //       // 'e3': { rate: 0.01, limit: 1800 }
  //     }

  //     this.$sim.find('input:radio').on('change.Sim', function() {
  //       s.update();
  //     });
  //     this.resultSet();
  //     this.update();
  //   },

  //   update: function() {

  //     var type = this.type['a1'];
  //     var sim1 = parseInt(this.$select1.filter(':checked').val(), 10);
  //     var sim2 = parseInt(this.$select2.filter(':checked').val(), 10);
  //     var sim3 = parseInt(this.$select3.filter(':checked').val(), 10);

  //     this.selectUpdate(this.$select1);
  //     this.selectUpdate(this.$select2);
  //     this.selectUpdate(this.$select3);

  //     if(sim1 && sim2 && sim3 ){
  //       var budget = sim1 + sim2 + sim3;
  //       var rate = type.rate;
  //       var limit = type.limit;

  //       var point = Math.min(budget * rate, limit)
  //       point = (point.toLocaleString() + '.').split('.')[0]

  //       // console.log('point', point)

  //       // this.$resultTxt.text(type.txt);
  //       this.$resultPoint.text(point);

  //       this.resultShow();
  //     }

  //   },

  //   selectUpdate($select) {

  //     if($select.is(':checked')) {
  //       $select.each(function(){
  //         if($(this).is(':checked')) {
  //           $(this).removeClass('is-unselect');
  //         }else {
  //           $(this).addClass('is-unselect');
  //         }
  //       })
  //     }

  //   },

  //   resultSet: function() {

  //     gsap.set('.js-sim-result', {
  //       display: "none",
  //       // autoAlpha: 0,
  //       marginTop: -30,
  //       opacity: 0,
  //     });

  //   },

  //   resultShow: function() {

  //     gsap.set('.js-sim-result', {
  //       opacity: 0,
  //     });

  //     gsap.to('.js-sim-result', {
  //       display: "block",
  //       // autoAlpha: 1,
  //       duration: 1.0,
  //       x: 0,
  //       marginTop: 0,
  //       opacity: 1,
  //       ease: 'power2.out',
  //       // ease: 'expo.out',
  //       // rotation: 180,
  //     });

  //   }

  // }



  /**
   * Accordion
   */
  var Accordion = function(){
    this.init();
  }

  Accordion.prototype = {
    enabled: null,

    init: function() {
      var self = this;
      if(!$('.js-acc')[0]) return;

      $('.js-acc').each(function(i){
        $(this).data('accordion', new AccordionCore(this));
      });

      //anchor open
      // $('.js-acc-open').on('click.Accordion', function(){
      //   $($(this).attr('href')).trigger('open.accordion');
      // })

      //hash open
      // var hash = window.location.hash;
      // if(hash != "#") {
      //   $(hash).trigger('open.accordion');
      // }
    }
  }

  var AccordionCore = function(target) {
    this.init(target);
  };

  AccordionCore.prototype = {
    enabled: null,

    init: function(target) {
      var self = this;
      this.$accordion = $(target);
      this.$trigger   = this.$accordion.find('.js-acc_trigger');
      // this.$triggersc = this.$accordion.find('.js-acc_trigger_scroll');
      this.$body      = this.$accordion.find('.js-acc_body');

      this.eventlabel = this.$trigger.data('eventlabel');

      this.enable();
      this.eventSetup();

    },

    enable: function() {
      var self = this;
      if(!this.enabled) {
        this.enabled = true;
        if(this.$accordion.hasClass('is-closed')) {
         this.$body.css({ display: 'none' });
        }
        this.$trigger.on('click.Accordion', function(e){
          self.toggle();
          return false;
        });
        // this.$triggersc.on('click.Accordion', function(e){
        //   self.toggle();
        //   $('body, html').stop().animate({ scrollTop: Math.round(self.$accordion.offset().top) }, { duration: 400, easing: 'swing' });
        //   return false;
        // });
      }
    },

    disable: function(){
      if(this.enabled) {
        this.enabled = false;
        this.$body.css({ display: 'block' });
        this.$trigger.off('click.Accordion');
      }
    },

    toggle: function(){
      var self = this;
      if(this.$body.is(':visible')) {
        this.close();
      } else {
        this.open();
      }
    },

    open: function(){
      this.$body.slideDown(400);
      this.$accordion.removeClass('is-closed');
      if(this.eventlabel) {
        dataLayer.push({'event': 'sendEvent','eventCategory': 'CRP_SPE_poikatsu','eventAction': 'click', 'eventLabel': this.eventlabel + '-open'});
      }
    },

    close: function(){
      this.$body.slideUp(400);
      this.$accordion.addClass('is-closed');
      if(this.eventlabel) {
        dataLayer.push({'event': 'sendEvent','eventCategory': 'CRP_SPE_poikatsu','eventAction': 'click', 'eventLabel': this.eventlabel + '-close'});
      }
    },

    eventSetup: function() {
      var self = this;
      this.$accordion.on('open.accordion', function(){
        self.open();
      })
      this.$accordion.on('close.accordion', function(){
        self.close();
      })
    }

  }

  /**
   * Slide
   */
  var Slide = function(){
    this.init();
  }

  Slide.prototype = {
    init: function() {
      var s = this;
      this.$slide = $('.js-slide');
      var op = {
        mobileFirst: true,
        easing: 'swing',
        speed: 500,
        useCSS: true,
        autoplay: false,
        arrows: false,
        dots: true,
        fade: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // rtl: true,
        responsive: [
          {
            breakpoint: 767,
            settings: "unslick"
          }
        ]
      }

      this.$slide.slick(op);
      window.matchMedia("(max-width: 767px)").addListener(function(){
        s.$slide.slick("resize");
      });

    }
  }

  /**
   * Chart
   */

  // Chart = function(){
  //   this.init();
  // }
  // Chart.prototype = {
  //   init: function() {
  //     var s  = this;

  //     this.step = 0;
  //     this.selectArr = [];

  //     this.$chart = $('.js-chart');
  //     this.$view = this.$chart.find('.js-chart-view');
  //     this.$dot = this.$chart.find('.js-chart-dot');
  //     this.$dotItem = this.$dot.find('.js-chart-dot-item');
  //     this.$result = this.$chart.find('.js-chart-result');
  //     this.$reset = this.$chart.find('.js-reset-btn');


  //     this.$view.each(function(i){

  //       $(this).find('.js-chart-btn').on('click.Chart', function() {
  //         var select = $(this).data('chart');
  //         // console.log(i,select)
  //         s.selectArr[i] = select;
  //         // console.log(s.selectArr)
  //         s.update(i)
  //       })
  //     });

  //     this.$reset.on('click', function(){
  //       s.reset();
  //     })

  //   },

  //   update: function(i) {
  //     this.step = i + 1;

  //     if(this.step < 3) {
  //       this.$view.hide();
  //       this.$view.eq(this.step).fadeIn(600);

  //       this.$dotItem.removeClass('is-current');
  //       this.$dotItem.eq(this.step).addClass('is-current');
  //     }else {
  //       this.$view.hide();
  //       this.$dot.hide();
  //       this.result();
  //     }

  //   },


  //   result() {

  //     if(this.selectArr[0] === 0) {
  //       var $myresult = this.$result.eq(0);
  //     }else {
  //       var $myresult = this.$result.eq(1);
  //     }

  //     var select2_3 = this.selectArr.slice(1).toString();
  //     var txtindex = 0;
  //     // console.log(select2_3)
  //     switch (select2_3) {
  //       case '0,0':
  //         txtindex = 0;
  //       break;
  //       case '0,1':
  //         txtindex = 1;
  //       break;
  //       case '1,0':
  //         txtindex = 2;
  //       break;
  //       case '1,1':
  //         txtindex = 3;
  //       break;
  //    }

  //     $myresult.find('.js-result-txt').hide().eq(txtindex).show();
  //     $myresult.fadeIn(600);
  //   },

  //   reset() {
  //     this.step = 0;
  //     this.selectArr = [];
  //     this.$result.hide();
  //     this.$view.eq(this.step).fadeIn(300);

  //     this.$dotItem.removeClass('is-current');
  //     this.$dotItem.eq(this.step).addClass('is-current');
  //     this.$dot.fadeIn(300);


  //     $('body, html').stop().animate({ scrollTop: Math.ceil($('#chart_head').offset().top ) }, { duration: 400, easing: 'swing' });
  //   }

  // }

  /**
   * Tab
   */

  Tab = function(){
    this.init();
  }
  Tab.prototype = {
    init: function() {
      var s  = this;

      this.$tabs = $('.js-tabs');
      this.$tab = this.$tabs.find('[role=tab]');
      this.$panel = this.$tabs.find('[role=tabpanel]');

      this.$tab.on('click', function(){
        $(this).attr('aria-controls');
        s.update($(this).attr('aria-controls'));
      })


      this.tabon();

      var initTabId = this.$tab.filter('[aria-selected=true]').attr('aria-controls');
      this.update(initTabId)
    },

    update: function(tabId) {
      this.$tab.attr('aria-selected', false);
      this.$panel.addClass('is-hidden').css({display: ''});

      var $target = this.$panel.filter('#' + tabId);
      this.$tab.eq($target.index() - 1).attr('aria-selected', true);
      $target.removeClass('is-hidden').css({opacity: 0}).animate({opacity: 1}, 200);
    },


    tabon: function() {
      var s  = this;
      this.$tabopen = $('.js-tab-open');
      this.$tabopen.on('click', function(){
        s.update($(this).data('tab-open'));
      })

      this,

      this.$tabopenScroll = $('.js-tab-open-scroll');
      this.$tabopenScroll.on('click', function(){
        s.update($(this).data('tab-open'));
        var tar = $(this).attr('href');
        $('body, html').stop().animate({ scrollTop: Math.ceil($(tar).offset().top ) }, { duration: 400, easing: 'swing' });
      })

    }

  }


  new Scroll();
  new Effect();
  new Accordion();
  // new Sim();
  new Slide();
  // new Chart();
  new Tab();

})(jQuery);


// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// function onYouTubePlayerAPIReady(){

//   $(function(){
//     document.movieSlide = new MovieSlide();
//     // document.movieSlide.setYT();

//   });
// }

// /**
//  * MovieSlide
//  */
// var MovieSlide = function(){
//   this.init();
// }

// MovieSlide.prototype = {
//   init: function() {
//     var s = this;
//     this.$slideWrap = $('.js-movie-slide-wrap');
//     this.$slide = $('.js-movie-slide');
//     this.$slideCtrl;
//     this.slideIsPlaying = true;
//     this.players = [];

//     var op = {
//       mobileFirst: true,
//       easing: 'swing',
//       speed: 600,
//       useCSS: true,
//       autoplay: false,
//       // autoplaySpeed: 6000,
//       arrows: true,
//       dots: true,
//       appendArrows: $('.movie_slide_ctrls'),
//       appendDots: $('.movie_slide_ctrls'),
//       fade: false,
//       infinite: false,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       pauseOnFocus: false,
//       pauseOnHover: false,
//       pauseOnDotsHover: false,
//       // rtl: true,
//       responsive: [
//         {
//           breakpoint: 767,
//           speed: 1000,
//         }
//       ]
//     }

//     this.$slide.on('init', function(event, slick){

//       // 複製プレイヤーの操作
//       // s.$slideWrap.find('.movie_player').each(function(i){
//       //   $(this).find('iframe').attr('id', 'yt' + i);
//       // })
//       // s.setYT();


//       // 一時停止ボタン
//       // s.$slideWrap.find('.slick-dots').after('<div class="movie_slide_ctrl js-movie-slide-ctrl is-playing"><button type="button"></button></div>');
//       // s.$slideCtrl = $('.js-movie-slide-ctrl');
//       // s.$slideCtrl.on('click', function(){
//       //   if(s.slideIsPlaying) {
//       //     s.slidePause();
//       //   }else {
//       //     s.slidePlay();
//       //   }
//       // })

//       // 文字ライン
//       s.$slide.find('.js-eff-line-in-slide').each(function(){
//         gsap.to($(this)[0], {
//           transformOrigin: '0 0',
//           scaleX: 0,
//         })
//       })
//     });

//     this.$slide.on('beforeChange', function(event, slick, currentSlide){
//       // console.log('beforeChange')
//       // if(s.players.length) {
//       //   s.players.forEach(function(elm){
//       //     // console.log(elm)
//       //     if (elm.getPlayerState && elm.getPlayerState() != YT.PlayerState.CUED) {
//       //       elm.stopVideo();
//       //     }
//       //   })
//       // }

//       s.$slide.find('.movie_player').each(function(){
//         $(this).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//       });
//     });

//     this.$slide.on('afterChange', function(event, slick, currentSlide, nextSlide){
//       // console.log('afterChange')

//       // オートスクロール補正
//       // if(s.slideIsPlaying) {
//       //   s.$slide.slick('slickPlay');
//       // }else {
//       //   s.$slide.slick('slickPause');
//       // }

//       // 文字ライン
//       gsap.to(s.$slide.find('.slick-active .js-eff-line-in-slide')[0], {
//         duration: 0.5,
//         scaleX: 1,
//         ease: 'power1.out',
//       })
//     });

//     this.$slide.slick(op);

//     // window.matchMedia("(max-width: 767px)").addListener(function(){
//     //   s.$slide.slick("resize");
//     // });
//   },

//   // slidePause: function() {
//   //   console.log('slidePause')
//   //   this.$slide.slick('slickPause');
//   //   this.$slideCtrl.removeClass('is-playing');
//   //   this.slideIsPlaying = false;
//   // },

//   // slidePlay: function() {
//   //   console.log('slidePlay')
//   //   this.$slide.slick('slickPlay');
//   //   this.$slideCtrl.addClass('is-playing');
//   //   this.slideIsPlaying = true;
//   // },

//   setYT: function() {
//     var s = this;
//     s.$slideWrap.find('.movie_player').each(function(){

//       var player = new YT.Player($(this).find('iframe').attr('id'),{
//         events: {
//           'onReady': function(e){
//           },
//           'onStateChange': function(e) {
//             // console.log('onStateChange', e)
//             // if (e.data == YT.PlayerState.PLAYING) {
//             //   s.$slide.slick('slickPause');
//             // }
//             // // if (e.data == YT.PlayerState.ENDED || e.data == YT.PlayerState.PAUSED) {
//             // if (e.data == YT.PlayerState.ENDED) {
//             //   if(s.slideIsPlaying) {
//             //     s.$slide.slick('slickPlay');
//             //   }
//             // }
//           }
//         }
//       });

//       s.players.push(player)

//     })

//   }

// }
// new MovieSlide();