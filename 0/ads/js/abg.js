
(function(){function b(a,d){return function(){a.apply(d)}}function c(a){this.a=a.el;this.a.onmouseover=b(this.i,this);this.a.onmouseout=b(this.g,this);if(a.ael&&a.iel)this.b=a.ael,this.c=a.iel;"s"in a?(this.e=Number(a.h),this.f=Number(a.s)):(this.e=a.w-a.bw,a.rtl&&(this.e*=-1),this.f=0);this.d=0}c.prototype.i=function(){window.clearTimeout(this.d);this.a.style.left=this.f+"px";if(this.c&&this.b)this.c.style.display="none",this.b.style.display="block"};
c.prototype.g=function(){window.clearTimeout(this.d);this.d=window.setTimeout(b(this.j,this),500)};c.prototype.j=function(){this.a.style.left=this.e+"px";if(this.c&&this.b)this.c.style.display="block",this.b.style.display="none"};window.abgp&&new c(window.abgp);})();
