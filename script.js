document.getElementById('year').textContent = new Date().getFullYear();

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Mobile nav toggle
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', function(){
    var open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Active nav link on scroll (with aria-current)
  var sections = document.querySelectorAll('main section[id]');
  window.addEventListener('scroll', function(){
    var pos = window.scrollY + 120;
    sections.forEach(function(sec){
      var top = sec.offsetTop, bottom = top + sec.offsetHeight;
      var link = document.querySelector('nav.links a[href="#' + sec.id + '"]');
      if(!link) return;
      if(pos >= top && pos < bottom){
        link.classList.add('active');
        link.setAttribute('aria-current', 'true');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }, { passive: true });

  // Reveal-on-scroll for cards, timeline items, stats, etc.
  var revealEls = document.querySelectorAll('.reveal');
  if(reduceMotion || !('IntersectionObserver' in window)){
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  } else {
    var revealObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function(el){ revealObserver.observe(el); });
  }

  // Animated count-up for hero stats
  function formatStat(node, value){
    var prefix = node.dataset.prefix || '';
    var suffix = node.dataset.suffix || '';
    var decimals = parseInt(node.dataset.decimals || '0', 10);
    return prefix + value.toFixed(decimals) + suffix;
  }
  var statNums = document.querySelectorAll('.stat-num');
  function runCountUp(node){
    var end = parseFloat(node.dataset.end);
    if(reduceMotion){ node.textContent = formatStat(node, end); return; }
    var duration = 1100, start = null;
    function step(ts){
      if(start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = formatStat(node, end * eased);
      if(progress < 1){ requestAnimationFrame(step); }
    }
    requestAnimationFrame(step);
  }
  if('IntersectionObserver' in window){
    var statObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          runCountUp(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statNums.forEach(function(el){ statObserver.observe(el); });
  } else {
    statNums.forEach(function(el){ el.textContent = formatStat(el, parseFloat(el.dataset.end)); });
  }
