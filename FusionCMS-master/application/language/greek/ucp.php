<?php

/**
 * Note to module developers:
 * 	Keeping a module specific language file like this
 *	in this external folder is not a good practise for
 *	portability - I do not advice you to do this for
 *	your own modules since they are non-default.
 *	Instead, simply put your language files in
 *	application/modules/yourModule/language/
 *	You do not need to change any code, the system
 *	will automatically look in that folder too.
 */

// UCP
$lang['user_panel'] = "Πίνακας χρήστη";
$lang['change_avatar'] = "Αλλαγή avatar";
$lang['nickname'] = "Ψευδώνυμο";
$lang['location'] = "Τοποθεσία";
$lang['expansion'] = "Expansion";
$lang['account_rank'] = "Κατάταξη λογαριασμού";
$lang['voting_points'] = "Πόντοι ψήφων";
$lang['donation_points'] = "Πόντοι δωρεών";
$lang['account_status'] = "Κατάσταση λογαριασμού";
$lang['member_since'] = "Μέλος απο";

// Avatar
$lang['change_avatar'] = "Αλλαγή avatar";
$lang['make_use'] = "Κάνουμε χρήση του";
$lang['provides_way'] = "το οποίο παρέχει έναν εύκολο τρόπο για να διατηρείτε τα avatars σας σε όλο τον ιστό.";
$lang['to_change'] = "Για να αλλάξετε το avatar σας θα πρέπει να";
$lang['sign_up_for'] = "κάνετε λογαριασμό";
$lang['or'] = "ή";
$lang['log_into'] = "κάνετε είσοδο στο";
$lang['using_email'] = "χρησημοποιώντας το ακόλουθο email:";

// Settings
$lang['settings'] = "Ρυθμίσεις λογαριασμού";

$lang['nickname_error'] = "Το ψευδώνυμο πρέπει να είναι μεταξύ 4 και 14 χαρακτήρων και μπορεί να περιέχει μονο γράμματα και αριθμούς";
$lang['location_error'] = "Η τοποθεσία μπορεί να είναι μεχρι 32 χαρακτήρων και μπορεί να περιέχει μόνο γράμματα";
$lang['pw_doesnt_match'] = "Οι κωδικοί δεν ταιριάζουν!";
$lang['changes_saved'] = "Οι αλλαγές αποθηκεύτηκαν!";
$lang['invalid_pw'] = "Λανθασμένος κωδικός!";
$lang['nickname_taken'] = "Το ψευδώνυμο ειναι κατειλημμένο";
$lang['invalid_language'] = "Λανθασμένη γλώσσα";

// Change expansion
$lang['change_expansion'] = "Αλλαγή expansion";
$lang['expansion_changed'] = "Το expansion σας άλλαξε.";
$lang['back_to_ucp'] = "Πατήστε εδώ για να πάτε πίσω στον Πίνακα χρήστη!";
$lang['invalid_expansion'] = "Το expansion ποθ επιλέξατε δεν υπάρχει!";
$lang['expansion'] = "Expansion";
$lang['none'] = "Κανένα";

/**
 * Only translate these if World of Warcraft does it themselves,
 * otherwise you'll confuse people who expect to see them in English
 */
$lang['tbc'] = "The Burning Crusade";
$lang['wotlk'] = "Wrath of The Lich King";
$lang['cataclysm'] = "Cataclysm";
$lang['mop'] = "Mists of Pandaria";