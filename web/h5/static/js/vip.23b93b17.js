(window.webpackJsonp=window.webpackJsonp||[]).push([["vip"],{a9a0:function(e,t,i){"use strict";i.r(t),i("7514");var s=i("75fc"),n=(i("e7e5"),i("d399")),r=(i("c5f6"),i("ac6a"),i("8615"),i("db72")),a=i("b9ff"),o=i("3ce7"),c=i("7212"),l=(i("dfa4"),{components:{swiper:c.swiper,swiperSlide:c.swiperSlide},props:{levels:{type:Array,default:function(){return[]}},isVip:{type:Object,default:function(){return{}}},buyType:{type:String,default:"month"},user:{type:Object,default:function(){return{}}},activeIndex:""},data:function(){var e=this;return{swiperOption:{notNextTick:!0,loop:!1,centeredSlides:!0,spaceBetween:38,slidesPerView:1.5,observer:!0,observeParents:!0,on:{slideChangeTransitionStart:function(){e.$emit("update:activeIndex",this.activeIndex)}}}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},watch:{activeIndex:function(e){this.swiper.slideTo(e,1e3,!1)}},methods:{vipPopShow:function(){this.$emit("vipOpen",!0)},setActiveIndex:function(e){this.$emit("update:activeIndex",e)}}}),p=i("0c7c"),u=Object(p.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vip-introduce gray-border-bottom"},[i("swiper",{ref:"mySwiper",attrs:{options:e.swiperOption}},e._l(e.levels,(function(t,s){return i("swiper-slide",{key:s},[i("img",{staticClass:"card-bg-img",attrs:{src:t.background}}),i("div",{staticClass:"vip-info"},[i("div",{staticClass:"vip-info__name text-overflow"},[e._v(e._s(t.name))]),i("div",{staticClass:"text-10 vip-rights-num"},[e._v(e._s(t.freeCourseNum)+"门课程 "+e._s(t.freeClassroomNum)+"个班级")]),i("div",{staticClass:"text-10"},[e._v("\n          "+e._s("year"===e.buyType?t.yearPrice+"元 / 年":t.monthPrice+"元 / 月")+"\n        ")])])])})),1),e.levels&&e.levels[e.activeIndex]?i("div",{directives:[{name:"show",rawName:"v-show",value:e.levels[e.activeIndex].description,expression:"levels[activeIndex].description"}],staticClass:"vip-introduce__text"},[i("header",{staticClass:"title-18 text-center ph20"},[e._v(e._s(e.levels[e.activeIndex].name)+"介绍")]),i("div",{staticClass:"text-content mt20"},[e._v(e._s(e.levels[e.activeIndex].description||"暂无介绍"))])]):e._e(),e.isVip&&e.user?e._e():i("div",{staticClass:"text-center"},[i("div",{staticClass:"btn-join-vip",on:{click:e.vipPopShow}},[e._v("开通会员")])])],1)}),[],!1,null,null,null).exports,v={name:"VipPopup",props:{item:{type:Object,default:function(){return{}}},index:{type:Number,default:-1},vipBuyType:{type:String,default:"month"}},created:function(){var e="year"===this.vipBuyType;(!e&&2===this.index||e&&0===this.index)&&this.handleClick()},methods:{handleClick:function(){this.$emit("selectItem",{num:this.item.num,unit:this.item.unit})}}},d=Object(p.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vip-price-item",on:{click:this.handleClick}},[t("div",{staticClass:"vip-price-item__buy-type mb15 text-14"},[this._v(this._s(this.item.time))]),t("div",{staticClass:"red"},[this._v("¥ "+this._s(this.item.price))]),t("i",{staticClass:"select-icon h5-icon h5-icon-zhengque"})])}),[],!1,null,null,null).exports,h=i("062f"),m={month:"个月",year:"年"},f=function(e,t,i){return{time:"".concat(e).concat(m[t]),price:(e*i).toFixed(2),num:e,unit:t}},g=function(e,t,i){switch(e){case"month":return[f(1,"month",t),f(3,"month",t),f(12,"month",t)];case"year":return[f(1,"year",i),f(2,"year",i),f(3,"year",i)];case"year_and_month":return[f(1,"month",t),f(3,"month",t),f(1,"year",i)];default:return""}},_=i("0d25"),y=i("2f62"),I=i("faa5"),b=i("4328"),w=i.n(b),x={components:{EPopup:a.a,priceItem:d,"vip-introduce":u,"e-course-list":h.a},data:function(){return{loaded:!1,user:{},vipInfo:null,vipUser:{},levels:[{courses:{data:[]},classrooms:{data:[]}}],currentLevelIndex:0,activePriceIndex:-1,vipPopShow:!1,priceItems:[],buyType:"month",bottomBtnShow:!1,orderParams:{unit:"month",num:0},isShowInviteUrl:!1,bindAgencyRelation:{},drpSetting:{}}},computed:Object(r.a)({},Object(y.d)(["vipSettings","isLoading","vipSwitch","DrpSwitch"]),{},Object(y.d)({userInfo:function(e){return e.user}}),{vipDated:function(){if(!this.vipInfo)return!1;var e=new Date(this.vipInfo.deadline).getTime();return(new Date).getTime()>e},courseData:function(){var e=this.levels[this.currentLevelIndex].courses.data;if(0==e.length)return!1;var t={items:[],title:"会员课程",source:{},limit:4};return t.items=e,t},classroomData:function(){var e=this.levels[this.currentLevelIndex].classrooms.data;if(0==e.length)return!1;var t={items:[],title:"会员班级",source:{},limit:4};return t.items=e,t},vipDeadline:function(){if(!Object.values(this.vipInfo).length)return"";var e=new Date(this.vipInfo.deadline);return Object(_.formatFullTime)(e)},btnStatus:function(){if(!this.vipInfo)return"开通";var e=Number(this.levels[this.currentLevelIndex].seq),t=this.vipInfo.seq;return t>e?"":this.vipDated?"开通":t<e?"升级":"续费"},leftDays:function(){if(!Object.values(this.vipInfo).length)return!1;var e=(new Date).getTime(),t=new Date(this.vipInfo.deadline).getTime();return Object(_.getOffsetDays)(e,t)+1},inviteUrl:function(){var e={type:"vip",id:this.levels[this.currentLevelIndex].id,merchant_id:this.drpSetting.merchantId};return this.drpSetting.distributor_template_url+"?"+w.a.stringify(e)}}),created:function(){this.vipSwitch?(this.getVipLevels(),this.showInviteUrl(),setTimeout((function(){window.scrollTo(0,0)}),100)):this.$router.push({name:"find"})},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll,!0)},methods:{getVipLevels:function(){var e=this;o.a.getVipLevels({disableLoading:!1}).then((function(t){if(t.length){var i=t[0].id;e.getVipDetail(i)}else e.$router.push({name:"find"})})).catch((function(e){n.a.fail(e.message)}))},getVipDetail:function(e){var t=this,i=this.$route.query.id;o.a.getVipDetail({query:{levelId:e}}).then((function(s){t.vipUser=s.vipUser||{},t.levels=s.levels,t.vipInfo=t.vipUser.vip,t.user=t.vipUser.user,t.buyType=t.vipSettings.buyType;var n=t.userInfo;n.vip=t.vipInfo,t.$store.commit(I.r,n),e=t.vipUser.vip?t.vipUser.vip.levelId:s.levels[0].id,e=isNaN(i)?e:i,t.getPriceItems(s.levels),t.getVipIndex(e,s.levels),t.loaded=!0}))},getPriceItems:function(e){for(var t=0;t<this.levels.length;t++){var i=e[t];this.priceItems=[].concat(Object(s.a)(this.priceItems),[g(this.vipSettings.buyType,i.monthPrice,i.yearPrice)])}},getVipIndex:function(e,t){var i=0;t.find((function(t,s){if(t.id===e)return i=s,t})),this.currentLevelIndex=i},selectPriceItem:function(e,t){this.activePriceIndex=t,this.orderParams.unit=e.unit,this.orderParams.num=e.num},joinVip:function(){this.activePriceIndex<0||this.$router.push({name:"order",params:{id:this.levels[this.currentLevelIndex].id,unit:this.orderParams.unit,num:this.orderParams.num,type:this.btnStatus},query:{targetType:"vip"}})},vipOpen:function(){this.user?this.vipPopShow=!0:this.$router.push({path:"/login",query:{redirect:"/vip"}})},handleScroll:function(){if(this.btnStatus){var e="",t=0;this.user&&this.vipUser.vip?e=this.$refs.joinBtnTop.getBoundingClientRect().bottom:(e=this.$refs.joinBtnBottom.$el.getBoundingClientRect().bottom,t=45),this.bottomBtnShow=e<t}},popShow:function(){if(this.user){if("升级"===this.btnStatus){var e=this.vipSettings.upgradeMinDay;return this.leftDays<=e?void Object(n.a)("会员剩余天数小于".concat(e,"天，请先续费后再升级")):(this.activePriceIndex=0,void this.joinVip())}this.vipDated&&this.vipInfo&&this.getVipIndex(this.vipInfo.levelId,this.levels),this.vipPopShow=!0}else this.$router.push({path:"/login",query:{redirect:"/vip"}})},showInviteUrl:function(){this.DrpSwitch?(this.getDrpSetting(),this.getAgencyBindRelation()):this.isShowInviteUrl=!1},getAgencyBindRelation:function(){var e=this;o.a.getAgencyBindRelation().then((function(t){t.agencyId?(e.bindAgencyRelation=t,e.isShowInviteUrl=!0):e.isShowInviteUrl=!1}))},getDrpSetting:function(){var e=this;o.a.getDrpSetting().then((function(t){e.drpSetting=t}))}}},S=Object(p.a)(x,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vip-detail"},[e.isLoading?i("e-loading"):e._e(),e.loaded?i("div",{staticClass:"user-section gray-border-bottom clearfix"},[e.user?i("div",[e.user.avatar?i("img",{staticClass:"user-img",attrs:{src:e.user.avatar.large}}):e._e(),i("div",{staticClass:"user-middle"},[i("div",{staticClass:"user-name"},[e._v(e._s(e.user.nickname))]),e.vipInfo?i("span",{staticClass:"user-vip vip-level text-overflow"},[e.vipInfo.icon?i("img",{class:["vip-img",e.vipDated?"vip-expired":""],attrs:{src:e.vipInfo.icon}}):e._e(),e.vipDated?i("span",{staticClass:"grey vip-name vip-name-short text-overflow"},[e._v(e._s(e.vipInfo.vipName)+"已过期")]):i("span",[e._v(e._s(e.vipInfo.vipName))])]):i("span",{staticClass:"user-vip"},[e._v("您还不是会员")])]),e.vipInfo?i("div",{staticClass:"vip-status"},[e.btnStatus?i("div",{ref:"joinBtnTop",staticClass:"vip-status__btn",on:{click:e.popShow}},[e._v(e._s(e.vipDated?"重新开通":e.btnStatus))]):e._e(),e.vipDeadline?i("div",{class:["vip-status__deadline",e.btnStatus?"":"deadline-middle"]},[e._v(e._s(e.vipDeadline)+" 到期")]):e._e()]):e._e()]):i("router-link",{attrs:{to:{path:"/login",query:{redirect:"/vip"}}}},[i("img",{staticClass:"user-img",attrs:{src:"static/images/avatar.png"}}),i("div",{staticClass:"user-middle single-middle"},[i("div",{class:["user-vip",e.user?"":"text-middle"]},[e._v("立即登录，查看会员权益")])])])],1):e._e(),i("vip-introduce",{ref:"joinBtnBottom",attrs:{levels:e.levels,user:e.user,"buy-type":e.buyType,"is-vip":e.vipUser.vip,"active-index":e.currentLevelIndex},on:{"update:activeIndex":function(t){e.currentLevelIndex=t},"update:active-index":function(t){e.currentLevelIndex=t},vipOpen:e.vipOpen}}),e.isShowInviteUrl?i("a",{attrs:{href:e.inviteUrl}},[i("div",{staticClass:"coupon-code-entrance"},[e._v("\n      邀请好友购买\n      "),i("i",{staticClass:"van-icon van-icon-arrow pull-right"}),i("i",{staticClass:"pull-right"},[e._v("赚 "+e._s(e.drpSetting.minDirectRewardRatio)+"%")])])]):e._e(),e.courseData?i("e-course-list",{staticClass:"gray-border-bottom",attrs:{"course-list":e.courseData,"vip-name":e.levels[e.currentLevelIndex].name,"more-type":"vip","level-id":Number(e.levels[e.currentLevelIndex].id),"type-list":"course_list"}}):e._e(),e.classroomData?i("e-course-list",{staticClass:"gray-border-bottom",attrs:{"more-type":"vip","level-id":Number(e.levels[e.currentLevelIndex].id),"course-list":e.classroomData,"vip-name":e.levels[e.currentLevelIndex].name,"type-list":"classroom_list"}}):e._e(),e.priceItems[e.currentLevelIndex]?i("e-popup",{staticClass:"vip-popup",attrs:{show:e.vipPopShow,title:e.btnStatus+e.levels[e.currentLevelIndex].name,"content-class":"vip-popup__content"},on:{"update:show":function(t){e.vipPopShow=t}}},[i("div",{staticClass:"vip-popup__header text-14"},[e._v("选择"+e._s(e.btnStatus)+"时长")]),i("div",{staticClass:"vip-popup__body"},[i("van-row",{attrs:{gutter:"20"}},e._l(e.priceItems[e.currentLevelIndex],(function(t,s){return i("van-col",{key:s,attrs:{span:"8"}},[i("price-item",{class:{active:s===e.activePriceIndex},attrs:{item:t,index:s,"vip-buy-type":e.vipSettings.buyType},on:{selectItem:function(t){return e.selectPriceItem(t,s)}}})],1)})),1)],1),i("div",{staticClass:"btn-join-bottom",class:{disabled:e.activePriceIndex<0},on:{click:e.joinVip}},[e._v("确认"+e._s(e.btnStatus))])]):e._e(),e.bottomBtnShow&&e.btnStatus&&!e.vipDated?i("div",{staticClass:"btn-join-bottom",on:{click:e.popShow}},[e._v("立即"+e._s(e.btnStatus))]):e._e()],1)}),[],!1,null,null,null);t.default=S.exports},b9ff:function(e,t,i){"use strict";var s={name:"EPopup",props:{show:{type:Boolean,default:!1},title:{type:String,default:""},contentClass:{type:String,default:""}},computed:{popupShow:{get:function(){return this.show},set:function(e){this.$emit("update:show",e)}}},methods:{toggleClick:function(){this.popupShow=!1}}},n=i("0c7c"),r=Object(n.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("van-popup",{staticClass:"e-popup",attrs:{position:"bottom"},model:{value:e.popupShow,callback:function(t){e.popupShow=t},expression:"popupShow"}},[i("div",{staticClass:"e-popup__title"},[i("span",{staticClass:"name"},[e._v(e._s(e.title))]),i("i",{staticClass:"icon h5-icon h5-icon-guanbi",on:{click:e.toggleClick}})]),i("div",{staticClass:"e-popup__content",class:e.contentClass},[e._t("default")],2)])}),[],!1,null,null,null);t.a=r.exports}}]);