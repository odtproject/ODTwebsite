// Email.js version 5

var tld_ = new Array()
tld_[0] = "com";
tld_[1] = "org";
tld_[2] = "net";
tld_[3] = "ws";
tld_[4] = "info";
tld_[10] = "co.uk";
tld_[11] = "org.uk";
tld_[12] = "gov.uk";
tld_[13] = "ac.uk";
tld_[14] = ".sympatico.ca";
var topDom_ = 14;

var m_ = "mailto:";

var a_ = "@";
var d_ = ".";



function email_david() {
	mail2("davidf.ramsey","verizon",2,"","David F. Ramsey");
}

function email_genea(){
	mail2("NMahoneMiller","hotmail",0,"","Nancy Miller");
}

function email_convener(){
	mail2("cb33nsc","charter",2,"","Dr. Carl C. Bailey, Jr.");
}

function mail(name, dom, tl, params)
{
	
	var s = e(name,dom,tl);
	
	document.write('<a href="'+m_+s+params+'">'+s+'</a>');
}


function mail2(name, dom, tl, params, display)
{
	
	document.write('<a href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');

}

function mailteal(name, dom, tl, params, display)
{
	
	document.write('<a class="w3-text-theme" href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');

}

function mailbtn(name, dom, tl, params, display)
{
	document.write('<a class="w3-btn-block w3-teal w3-round w3-hover-blue" href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');
}

function mailbtn_sm(name, dom, tl, params, display)
{
	document.write('<a class="w3-btn w3-teal w3-round w3-hover-blue" href="'+m_+e(name,dom,tl)+params+'">'+display+'</a>');
}

function e(name, dom, tl)
{
	
	var s = name+a_;
	
	if (tl!=-2)
	{
		
		s+= dom;
		
		if (tl>=0)
			
			s+= d_+tld_[tl];
	
	}
	
	else
		
		s+= swapper(dom);

	return s;

}


function swapper(d)
{
	
	var s = "";

	for (var i=0; i<d.length; i+=2)
		
		if (i+1==d.length)
			
			s+= d.charAt(i)
		
		else
			
			s+= d.charAt(i+1)+d.charAt(i);
		return s.replace(/\?/g,'.');

}

