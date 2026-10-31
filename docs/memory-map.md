# Memory map field UI

Radio memory maps (`Radio.memoryMap`) describe EEPROM layout and how HamBench groups radio-wide settings. Field presentation lives on `RadioMemoryMapField.ui` (`RadioMemoryMapFieldUi`).

## `ui.section`

Optional radio menu group name, such as `"Display"`. UIs use it to group radio-wide settings. Menu numbers are not shown.

Kenwood drivers set this on the field `ui` object. Omit `section` when the setting has no menu group. Existing maps that leave it out stay valid.

`section` is a display name from the radio menu. It is not:

| Field | Role |
| --- | --- |
| `ui.group` | Settings group id. Matches `RadioMemoryMapGroup.id` when groups are declared. |
| `ui.subgroup` | Panel section id. Matches `RadioMemoryMapSubgroup.id` on the parent group. |
| `ui.menu` | Numbered front-panel item (`number`, optional `code` such as `SQL`). |
| `ui.section` | Menu group name used for grouping. Numbers are not shown. |
| `ui.sectionOrder` | Order of those section groups. Lower values come first. |
| `ui.order` | Display rank of one setting inside the panel. Lower values come first. |

## `ui.sectionOrder`

Optional number that orders section groups. Lower values come first. A Kenwood-style menu can use the hundreds digit (`1` for 100–199, `2` for 200–299). EEPROM layout is unchanged. Omit it when sections have no explicit order.

Example:

```json
{
  "id": "contrast",
  "type": "u8",
  "ui": {
    "group": "settings",
    "label": "Contrast",
    "widget": "integer",
    "section": "Display",
    "sectionOrder": 1
  }
}
```

There is no separate JSON Schema document for memory maps in this package. The TypeScript interfaces are the contract. `ui.section` is an optional string and `ui.sectionOrder` is an optional number, so validators and schemas that mirror `RadioMemoryMapFieldUi` should accept both and should not require them.

## Versioning

Adding `ui.section` and `ui.sectionOrder` is a compatible type change. A `feat` commit releases a minor version. You do not need to raise `minApiVersion` for maps that omit the fields.
