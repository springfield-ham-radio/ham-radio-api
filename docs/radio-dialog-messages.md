# Radio read/write dialog messages

Radio module configs (`configs/<model>.json`) may include optional setup text that HamBench shows in **Read from Radio** and **Write to Radio** before the user picks a serial port.

## Fields

Both fields are optional on `Radio`:

| Field | When shown |
| --- | --- |
| `readMessage` | Read from Radio (saved radio and direct read) |
| `writeMessage` | Write to Radio |

Use separate fields so a module can warn on write only. When read and write need the same copy, duplicate the object in JSON.

## Shape

```ts
interface RadioDialogMessage {
  title: string;
  body: string;
  severity?: "info" | "warning"; // omit for info
}
```

- **Plain text only** — no markdown or HTML. Newlines in `body` are line breaks in the UI.
- **`title`** — trimmed length 1–80 characters (`RADIO_DIALOG_MESSAGE_TITLE_MAX_LENGTH`).
- **`body`** — trimmed length 1–600 characters (`RADIO_DIALOG_MESSAGE_BODY_MAX_LENGTH`). Tab and newline are allowed; other control characters are not.
- **`severity`** — `info` (default) or `warning`.

Example:

```json
{
  "readMessage": {
    "title": "Set Menu 9 to PC",
    "body": "Menu 9 (SP/MIC JACK) must be PC before the radio answers the computer.",
    "severity": "info"
  },
  "writeMessage": {
    "title": "Set Menu 9 to PC",
    "body": "Menu 9 (SP/MIC JACK) must be PC before the radio answers the computer.",
    "severity": "info"
  }
}
```

## Validation

`validateRadioDialogMessage(fieldPath, value)` returns a `ValidationResult`. Omitted fields (`undefined`) are valid. `@springfield/ham-radio-registry` applies these rules during config ingest.

## Versioning

Adding messages to an existing driver is a compatible config change. Bump the per-config `version` per [ADR 0006](https://springfield-ham-radio.github.io/ham-radio-docs/developer/adr/0006-per-driver-config-semver.html) (typically minor). You do not need to raise `minApiVersion` for dialog text alone.

Types ship in `@springfield/ham-radio-api` (`Radio`, `RadioDialogMessage`, `RadioDialogSeverity`).
