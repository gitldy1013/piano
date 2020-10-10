package piano;

public enum PianoEnum {
  //按键和音符对应
  MID_KEY_CODE("01", "A");

  private final String code;
  private final String desc;

  PianoEnum(String code, String desc) {
    this.code = code;
    this.desc = desc;
  }

  public static String getCode(String code) {
    if (code == null || "".equals(code.trim())) {
      return "";
    }
    for (PianoEnum accountTypeEnum : PianoEnum.values()) {
      if (accountTypeEnum.getCode().equalsIgnoreCase(code)) {
        return accountTypeEnum.getDesc();
      }
    }
    return code;
  }

  public String getCode() {
    return this.code;
  }

  public String getDesc() {
    return this.desc;
  }
}
