
//==========================
// Customize Journals
//==========================

class CustomOldEnglish extends JournalSheet {
	static get defaultOptions() {
        console.log("Registering Old English Journal");
		const options = super.defaultOptions;
		options.classes.push('custom-old-english');
		return options;
	}
}
class CustomOne extends JournalSheet {
	static get defaultOptions() {
        console.log("Registering Custom Journal");
		const options = super.defaultOptions;
		options.classes.push('custom-one');
		return options;
	}
}

Hooks.on("init", (documentTypes) => {
    console.log("My Custom Journals | Registering ");
    /*CUSTOMIZE
     * Here, register your sheet so it shows up properly in the dropdown, just change
     * for your sheet name and you're good to go
     */

    Journal.registerSheet("journals", CustomOldEnglish, {
        label: "Custom Olde English",
        types: ["base"],
        makeDefault: false
    });
    Journal.registerSheet("journals", CustomOne, {
        label: "Custom One",
        types: ["base"],
        makeDefault: false
    });
    
    console.log("Custom Journals | Ready.")
})