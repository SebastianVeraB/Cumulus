public with sharing class THOR_ObjectCardDto{
	private String title;
	private String titleLabel;
	private String dropableBody;
	private Boolean isDeletable;
    private Boolean isNew;
    
	public THOR_ObjectCardDto(String title, String titleLabel, String dropableBody, Boolean isDeletable, Boolean isNew){
		this.title = title;
		this.titleLabel = titleLabel;
		this.dropableBody = dropableBody;
		this.isDeletable = isDeletable;
		this.isNew = isNew;
	}
}