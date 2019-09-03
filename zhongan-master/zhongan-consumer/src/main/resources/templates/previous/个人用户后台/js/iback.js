/**
* 用于普通页面的跨框架脚本攻击(CFS)防御
* added by xiahuitong at 2017-02-06
*/
if( top.location != self.location ) top.location.href = self.location;
