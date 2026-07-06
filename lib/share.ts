import * as Linking from "expo-linking";
import { Share } from "react-native";

/**
 * Share plain text via WhatsApp.
 *
 * Tries to open WhatsApp directly with the message pre-filled. If WhatsApp
 * is not installed (or the deep link fails), it falls back to the native
 * OS share sheet so the user can still send the text somewhere.
 */
export async function shareViaWhatsApp(message: string): Promise<void> {
  const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
  try {
    await Linking.openURL(url);
  } catch {
    // WhatsApp missing or link rejected — fall back to the native share sheet.
    try {
      await Share.share({ message });
    } catch {
      // User dismissed the share sheet; nothing to do.
    }
  }
}

/** Format a note as a nicely laid-out message for sharing. */
export function formatNoteForShare(note: {
  preacher: string;
  date: string;
  message: string;
}): string {
  return (
    `📝 Sermon Note\n` +
    `👤 Preacher: ${note.preacher}\n` +
    `📅 Date: ${note.date}\n\n` +
    `${note.message}\n\n` +
    `— shared from myBLE`
  );
}

/** Format a song's title + lyrics for sharing. */
export function formatSongForShare(song: {
  title: string;
  lyrics: string;
}): string {
  return `🎵 ${song.title}\n\n${song.lyrics}\n\n— shared from myBLE`;
}
