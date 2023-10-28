(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25a50cc7"],{"6bac":function(t,a,e){"use strict";var n=e("a626"),r=e.n(n);r.a},"6ef8":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"parking-add"},[e("VueForm",{ref:"vuForm",attrs:{formData:t.form_data,formItem:t.form_item,formHandler:t.form_handler},scopedSlots:t._u([{key:"city",fn:function(){return[e("CityArea",{ref:"cityArea",attrs:{mapLocation:!0,cityAreaValue:t.form_data.area},on:{"update:cityAreaValue":function(a){return t.$set(t.form_data,"area",a)},"update:city-area-value":function(a){return t.$set(t.form_data,"area",a)},callback:t.callbackComponent}})]},proxy:!0},{key:"amap",fn:function(){return[e("div",{staticClass:"address-map"},[e("AMap",{ref:"amap",attrs:{options:t.option_map},on:{callback:t.callbackComponent}})],1)]},proxy:!0}])})],1)},r=[],o=(e("caad"),e("b64b"),e("ac1f"),e("2532"),e("1276"),e("8e56")),i=e("79ba"),s=e("b2b5"),l=e("3950"),c={name:"ParkingAdd",data:function(){var t=this,a=function(t,a,e){a?e():e(new Error("请输入停车场名称"))},e=function(t,a,e){var n=/^[0-9]*$/;a?n.test(a)?e():e(new Error("请输入数字")):e(new Error("请输入可停放车辆"))};return{form_data:{parkingName:"",area:"",address:"",type:"",carsNumber:"",status:"",lnglat:""},form_item:[{type:"Input",label:"停车场名称",placeholder:"请输入停车场名称",prop:"parkingName",width:"200px",validator:[{validator:a,trigger:"change"}]},{type:"Slot",slotName:"city",prop:"area",label:"区域"},{type:"Input",label:"详细地址",placeholder:"请输入详细地址",prop:"address",required:!0},{type:"Radio",label:"类型",prop:"type",options:this.$store.state.config.parking_type,required:!0},{type:"Input",label:"可停放车辆",placeholder:"请输入数字类型",prop:"carsNumber",validator:[{validator:e,trigger:"change"}]},{type:"Radio",label:"禁启用",prop:"status",options:this.$store.state.config.radio_disabled},{type:"Slot",slotName:"amap",label:"位置"},{type:"Input",label:"经纬度",placeholder:"请输入详细地址",prop:"lnglat",disabled:!0}],form_handler:[{label:"确定",key:"submit",type:"danger",handler:function(){return t.formValidate()}},{label:"重置",key:"reset"}],id:this.$route.query.id,option_map:{mapLoad:!0},status:this.$store.state.config.radio_disabled,type:this.$store.state.config.parking_type,rules:{parkingName:[{required:!0,message:"请输入停车场名称",trigger:"change"}],carsNumber:[{required:!0,message:"数量不能为空",trigger:"change"},{type:"number",message:"请输入数字"}],address:[{required:!0,message:"详情地址不能为空",trigger:"change"}],area:[{required:!0,message:"请选择省市区",trigger:"change"}],lnglat:[{required:!0,message:"经纬度不能为空",trigger:"change"}]},button_loading:!1}},methods:{formValidate:function(){var t=this;this.$refs.vuForm.$refs.form.validate((function(a){if(!a)return console.log("error submit!!"),!1;console.log("idid",t.id),t.id?t.editParking():t.addParking()}))},callbackComponent:function(t){console.log("callbackComponent",t.data),t.function&&this[t.function](t.data)},setMapCenter:function(t){console.log("setMapCenter",t),this.$refs.amap.setMapCenter(t)},mapLoad:function(){this.getDetaile()},addParking:function(){var t=this;this.button_loading=!0,Object(i["a"])(this.form_data).then((function(a){console.log("addParking",a),t.$message({type:"primary",message:a.message}),t.button_loading=!1,t.reset("form")})).catch((function(a){t.button_loading=!1}))},editParking:function(){var t=this,a=JSON.parse(JSON.stringify(this.form_data));a.id=this.id,this.button_loading=!0,Object(i["d"])(a).then((function(a){t.$message({type:"primary",message:a.message}),t.button_loading=!1,t.$router.push({name:"ParkingIndex"})})).catch((function(a){t.button_loading=!1}))},getDetaile:function(){var t=this;if(!this.id)return!1;Object(i["c"])({id:this.id}).then((function(a){var e=a.data;for(var n in e)Object.keys(t.form_data).includes(n)&&(t.form_data[n]=e[n]);var r=e.lnglat.split(","),o={lng:r[0],lat:r[1]};t.$refs.amap.SetMarker(o),t.$refs.cityArea.initDefault(e.region)}))},reset:function(t){this.$refs[t].resetFields(),this.$refs.cityArea.clear(),this.$refs.amap.clearMarker()},getLnglat:function(t){console.log("getLnglat",t.lnglat.value),this.form_data.lnglat=t.lnglat.value}},beforeMount:function(){this.getDetaile()},components:{AMap:o["a"],CityArea:s["a"],VueForm:l["a"]}},u=c,d=(e("6bac"),e("2877")),p=Object(d["a"])(u,n,r,!1,null,"54b58ed0",null);a["default"]=p.exports},"79ba":function(t,a,e){"use strict";e.d(a,"a",(function(){return r})),e.d(a,"c",(function(){return o})),e.d(a,"d",(function(){return i})),e.d(a,"b",(function(){return s})),e.d(a,"e",(function(){return l}));var n=e("b775");function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].request({method:"post",url:"/parking/add/",data:t})}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].request({method:"post",url:"/parking/detailed/",data:t})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].request({method:"post",url:"/parking/edit/",data:t})}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].request({method:"post",url:"/parking/delete/",data:t})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n["a"].request({method:"post",url:"/parking/status/",data:t})}},"8e56":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"amap-wrap"},[e("el-amap",{staticClass:"amap-demo",attrs:{vid:"amapContainer",events:t.events}})],1)},r=[],o=(e("d81d"),e("8f9b"));function i(t){return{lng:t.lnglat.getLng(),lat:t.lnglat.getLat(),value:t.lnglat.getLng()+","+t.lnglat.getLat()}}function s(t,a){var e=new AMap.Geocoder;console.log("address.address",t.address),e.getLocation(t.address,(function(t,e){if("complete"===t&&"OK"===e.info){var n=e.geocodes[0].location.lat,r=e.geocodes[0].location.lng;a.setCenter([r,n])}else console.error("根据地址查询位置失败")}))}var l=null;function c(t,a){l&&(a.remove(l),l=null),l=new AMap.Marker({position:[t.lng,t.lat]}),a.add(l),a.setFitView()}function u(t){l&&(t.remove(l),l=null)}var d={name:"Amap",data:function(){return{map:null,zoom:18,events:{},lnglat:{}}},mounted:function(){var t=this;o["lazyAMapApiLoaderInstance"].load().then((function(){t.mapCreate(),t.map.on("click",(function(a){var e=i(a);t.lnglat=e,console.log("点击获取经纬度",e),t.$emit("callback",{function:"getLnglat",data:{lnglat:e}}),t.SetMarker()}))}))},methods:{mapCreate:function(t){var a=this;this.map=new AMap.Map("amapContainer",{center:[116.404765,39.918052],zoom:this.zoom}),this.map.on("complete",(function(){a.mapLoad()}))},mapLoad:function(){this.options.mapLoad&&this.$emit("callback",{function:"mapLoad"})},mapDestroy:function(){this.map&&this.map.destroy()},setMapCenter:function(t){s(t,this.map)},SetMarker:function(t){c(t||this.lnglat,this.map)},clearMarker:function(){u(this.map)}},props:{options:{type:Object,default:function(){}}}},p=d,f=(e("bbe8"),e("2877")),g=Object(f["a"])(p,n,r,!1,null,null,null);a["a"]=g.exports},a626:function(t,a,e){},bbe8:function(t,a,e){"use strict";var n=e("d434"),r=e.n(n);r.a},d434:function(t,a,e){}}]);