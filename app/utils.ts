export class Utils {
	public static setFormDirty(form : any) {
		var key: any;
		for (key in form.controls) {
			form.controls[key].markAsDirty();
		}
	}
}