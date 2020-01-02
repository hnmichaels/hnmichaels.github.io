function openSection(att, sectionName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsBySectionName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[I].style.display = "none";
		}
	tablinks = document.getElementsBySectionName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[I].sectionName = tablinks[I].sectionName.replace(" active", "");
	}
	document.getElementById(sectionName).style.display = "block";
	att.currentTarget.sectionName += " active";
}

