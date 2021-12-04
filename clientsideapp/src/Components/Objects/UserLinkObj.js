function UserLinkObj(id, link, linkName, linkImage) {
	this.id = id;
	this.link = link;
	this.linkName = linkName;
	this.linkImage = linkImage;
}
function EditUserLinkObj(link, linkName, linkId, linkImage) {
	this.link = link;
	this.linkId = linkId;
	this.linkName = linkName;
	this.linkImage = linkImage;
}

export { UserLinkObj, EditUserLinkObj };
