import initDatepicker from '../../template/datepicker/index';
const conf = {
	onShow: function() {
		initDatepicker({
			// showInput: false, // 默认为 true
			// placeholder: '请选择日期', // input 输入框
			// type: 'normal', // [normal 普通单选模式(默认), timearea 时间段选择模式(待开发), multiSelect 多选模式(待完善)]
		});
	}
};
Page(conf);
