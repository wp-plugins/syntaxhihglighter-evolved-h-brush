SyntaxHighlighter.brushes.Hackpad = function()
{
  var methods = ' length push pop insert remove sort sort_with map copy is_list fill';
  var funcs = ' abs mod min max pow new_list draw draw_text width height left right up down a_btn b_btn random time f1 f2 f3 f4 f5 f6 f7 f8 f9 f10 f11 f12 f13 f14 f15 f16';
  var keywords = ' return function while foreach else if';
  var operators = ' nothinghereyet';
  var variables = ' var_a var_b var_c var_d var_e var_f var_g var_h var_i var_j var_k var_l var_m var_n var_o';
  var input = ' input';

  this.regexList = [
      { regex: SyntaxHighlighter.regexLib.singleLineCComments, 				css: 'comments' },
      { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,  	css: 'string' },
      { regex: new RegExp(this.getKeywords(funcs), 'gmi'),            		css: 'functions' },
      { regex: new RegExp(this.getKeywords(methods), 'gmi'),            	css: 'color1' },
      { regex: new RegExp(this.getKeywords(input), 'gmi'),              	css: 'color2' },
      { regex: new RegExp(this.getKeywords(variables), 'gmi'),          	css: 'variable' },
      { regex: new RegExp(this.getKeywords(operators), 'gmi'),          	css: 'operator' },
      { regex: new RegExp(this.getKeywords(keywords), 'gmi'),           	css: 'keyword' }
      ];
};

SyntaxHighlighter.brushes.Hackpad.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Hackpad.aliases = ['hackpad', 'hack', 'hacked'];