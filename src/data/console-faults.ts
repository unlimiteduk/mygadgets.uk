// PS5 and Xbox faults other than HDMI. No printed prices: each is quoted
// after a free diagnosis. HDMI port repair stays on its own pages at £70.

import type { RepairLink, Service } from './services';
import { SITE } from './site';

const REPAIR_WARRANTY = `${SITE.repairsWarranty} on the work we carry out, the same written repair warranty as every other job on this site. It covers the part we fitted and the work we did. New physical damage after the repair is not covered. Full terms are on the warranty page.`;

const VISIT =
  'Walk in during opening hours, or call 07918 440326. The shop is 23 High Street, Whitton, Twickenham TW2 7LB. Monday to Friday 09:00–18:00, Saturday 10:30–17:00, Sunday closed.';

function links(items: RepairLink[]): RepairLink[] {
  return items;
}

export const CONSOLE_FAULTS: Service[] = [
  {
    slug: 'playstation/overheating-repair',
    device: 'playstation',
    deviceLabel: 'PlayStation',
    name: 'Overheating',
    h1: 'PS5 overheating repair in Twickenham',
    title: 'PS5 overheating repair in Twickenham and Whitton',
    metaDescription:
      'PS5 overheating repair in Twickenham and Whitton. Loud fan, a hot case, or it shuts down in a game. Free diagnosis, quote before work. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'The fan screams in a game and is quiet on the home screen',
      'The case is too hot to rest a hand on after half an hour',
      'A "PS5 is too hot" warning, then the console shuts down',
      'It only misbehaves in a closed cabinet, or after the vents have filled with dust',
    ],
    whatWeDo: [
      'Heat and "no picture" are different faults. If the PS5 is clearly running and the television stays black, start on the HDMI port page. Overheating is the console that cooks itself.',
      'We listen to the fan, look at the vents, and ask whether it fails in the menu or only in a demanding game. Dust packed into the fan and the heatsink is the usual find. A fan that no longer reaches the speed the console is asking for is the next.',
      'A PS5 uses liquid metal on the APU, not ordinary paste. When the console is open we check that the metal still covers the processor. If it has pumped out or dried, a new fan on its own will not fix the temperature. The quote names the work before anything is ordered.',
    ],
    parts:
      'Often no new part: the fan and heatsink are cleaned, and the liquid metal is inspected. A replacement fan, or board repair if the processor has failed, is written on the quote first. There is no printed price for this job.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'PS5 fan and heatsink on the bench, dust lifted out before the liquid metal is checked',
    priceTable: [],
    faqs: [
      {
        q: 'How much does PS5 overheating repair cost in Twickenham?',
        a: 'We do not print a price. Dust, a tired fan and liquid metal that no longer covers the APU are different jobs, and the quote follows a free look. You can say no and take the console home. PS5 HDMI port repair is a separate job, and that one is £70 when the socket is the fault.',
      },
      {
        q: 'Do you repair the original PS5 and the Slim?',
        a: 'Yes. Disc and digital, including the Slim. The layout inside is not identical, which is another reason the figure comes after the console is open. PS4 overheating is the same bench and is also quoted, not priced from this page.',
      },
      {
        q: 'Will a clean wipe my games?',
        a: 'No. Cleaning the fan and checking the cooling does not format the drive or touch your PlayStation account. We do not need your password.',
      },
      {
        q: 'Should I redo the liquid metal myself?',
        a: 'No. It is conductive. Spilled across the board, it becomes a short, and a hot console becomes a dead one. Bring it to 23 High Street rather than opening it on the kitchen table.',
      },
    ],
    sections: [
      {
        heading: 'What is actually getting hot',
        paragraphs: [
          'A PS5 that lives on a carpet in a Hounslow flat, or in a TV unit in Isleworth with the doors shut, pulls its own hot air back in. We will say so if the room is the problem and the console is fine. We will not charge you for a clean you do not need.',
          'If the warning only appears in one new game and the fan note is normal, we check for a system-software issue before anyone lifts the fan. Feltham and Teddington customers bring the same machines we see from Whitton and Twickenham. The fault decides the job, not the postcode.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/playstation/keeps-turning-off/', label: 'PS5 keeps turning off' },
      { href: '/repairs/playstation/no-power/', label: 'PS5 will not turn on' },
      { href: '/repairs/playstation/hdmi-port-repair/', label: 'PS5 HDMI port repair', note: '£70' },
      { href: '/repairs/xbox/overheating-repair/', label: 'Xbox overheating repair' },
    ]),
  },
  {
    slug: 'playstation/keeps-turning-off',
    device: 'playstation',
    deviceLabel: 'PlayStation',
    name: 'Keeps turning off',
    h1: 'PS5 keeps turning off — repair in Whitton',
    title: 'PS5 keeps turning off — repair in Whitton, Twickenham',
    metaDescription:
      'PS5 keeps turning off? Repair in Whitton and Twickenham when it dies mid-game or at the menu and stays off. Free diagnosis, then a quote. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'It drops to a black screen mid-game and does not come back until you press the power button',
      'The light goes white, then out, with no "too hot" message',
      'It switches off while you are still on the home screen, so a single game is not the cause',
      'It will power on again after a few minutes, then die in the same way',
    ],
    whatWeDo: [
      'A shutdown that stays off is not the same as a restart. If the PS5 reboots to the logo by itself, that is the random-restart page. If it is screaming hot first, start with overheating. This page is the console that simply goes dark and stays there.',
      'We ask when it dies, whether the case was hot, and whether the power cable was kicked. Then we try a known-good mains lead in the shop. A lead that has been crushed behind a cabinet in Teddington is a cheaper answer than a board.',
      'If the lead is fine, the fault is inside: the power supply, a short, or liquid metal that has crept off the APU and onto the board. Those are not one repair. We open the PS5, name which it is, and quote before any parts are ordered.',
    ],
    parts:
      'Sometimes only the mains lead. Otherwise a power-supply repair or a board repair, written on the quote after the inspection. Cleaning is included only when heat is actually the cause. No price is printed for this fault.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'PS5 power supply and board on the bench after a shutdown that was not the HDMI socket',
    priceTable: [],
    faqs: [
      {
        q: 'Why does my PS5 keep turning off?',
        a: 'The usual split is heat, the power supply, or a short on the board, including liquid metal that has moved. We do not guess which from a phone description. Diagnosis at the Whitton shop is free, and the quote comes before work.',
      },
      {
        q: 'Is a PS5 that keeps turning off an HDMI fault?',
        a: 'Not if the console itself is going off. HDMI leaves the PS5 running and the television black. That repair is £70 on a PS5 when the socket is the fault. A shutdown is quoted separately.',
      },
      {
        q: 'Will I lose my saves?',
        a: 'No. Power and cooling work do not format the SSD. If the storage itself has failed we stop and tell you before anything is erased.',
      },
      {
        q: 'Where do I take it?',
        a: VISIT,
      },
    ],
    sections: [
      {
        heading: 'Shutdown, restart, and heat are three tickets',
        paragraphs: [
          'People in Twickenham use "it turns off" for all three. We split them because the repair is different. A protective shutdown after the fan has been roaring is a cooling job. A reboot to the PlayStation logo is a restart. A console that loses power with a cool case is the supply or the board.',
          'Bring the power lead you actually use. From Hounslow, Isleworth or Feltham that is the useful extra, not the television. A controller is optional.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/playstation/overheating-repair/', label: 'PS5 overheating repair' },
      { href: '/repairs/playstation/random-restart/', label: 'PS5 random restart' },
      { href: '/repairs/playstation/no-power/', label: 'PS5 will not turn on' },
      { href: '/repairs/xbox/keeps-turning-off/', label: 'Xbox keeps turning off' },
    ]),
  },
  {
    slug: 'playstation/random-restart',
    device: 'playstation',
    deviceLabel: 'PlayStation',
    name: 'Random restart',
    h1: 'PS5 random restart repair in Whitton',
    title: 'PS5 random restart repair in Whitton, Twickenham',
    metaDescription:
      'PS5 randomly restarting in Whitton and Twickenham. It reboots to the logo instead of staying on. Free diagnosis, quote before any work. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'The game vanishes and the PS5 boots back to the logo without you touching the power button',
      'It restarts in more than one game, or from the home screen',
      'It drops into safe mode and asks for a restart you did not choose',
      'The fan note changes just before the reboot, or the reboot happens with the console still cool',
    ],
    whatWeDo: [
      'A restart brings the console back. A shutdown leaves it off. If yours stays off, use the "keeps turning off" page. The repair is not the same, and we will not write them up as one job.',
      'One game that crashes back to the menu can be the game. A PS5 that reboots in several games, or while you are only on the home screen, is the console. We ask that question before the case comes off.',
      'Heat can force a protective reboot, so the fan and the liquid metal are checked when the story matches. If the case was cool, we look at power on the board and at the storage. A failing SSD can reboot a PS5 that is otherwise fine. The quote says which of those we found.',
    ],
    parts:
      'Nothing, when the fault is dust or a setting we can show you. Otherwise a cooling repair, storage, or a board fault, each quoted on its own. We do not sell a restart "fix" at a flat rate.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'PS5 on the bench at the logo screen after a restart, power lead tagged as the customer\'s own',
    priceTable: [],
    faqs: [
      {
        q: 'Why does my PS5 randomly restart?',
        a: 'If it happens in one game only, the game is the first suspect. If it happens on the home screen or across games, we check cooling, power and the SSD. The look is free. There is no printed price.',
      },
      {
        q: 'Will rebuilding the database fix it?',
        a: 'Sometimes it clears a software crash. It will not repair a fan, liquid metal that has moved, or a supply that is dipping. If you have already tried the safe-mode options, say so. We will not repeat them and call that the repair.',
      },
      {
        q: 'Do you need my PlayStation password?',
        a: 'No. A restart repair does not need your account. Games and saves stay put unless the storage itself has failed, and we tell you before anything is erased.',
      },
      {
        q: 'Can you look at it this week?',
        a: VISIT,
      },
    ],
    sections: [
      {
        heading: 'What to tell us when you book',
        paragraphs: [
          'The useful detail is whether it reboots to the logo or dies and stays dead, and whether you can make it happen in the menu. A photo of any on-screen code helps. The model is printed on the console: original PS5 or Slim, disc or digital.',
          'Whitton is the bench. Twickenham, Hounslow, Isleworth, Feltham and Teddington are the places most of these PS5s come from. Diagnosis is free either way.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/playstation/keeps-turning-off/', label: 'PS5 keeps turning off' },
      { href: '/repairs/playstation/overheating-repair/', label: 'PS5 overheating repair' },
      { href: '/repairs/playstation/no-power/', label: 'PS5 will not turn on' },
      { href: '/repairs/xbox/random-restart/', label: 'Xbox Series X restarting' },
    ]),
  },
  {
    slug: 'playstation/no-power',
    device: 'playstation',
    deviceLabel: 'PlayStation',
    name: 'No power',
    h1: 'PS5 won\'t turn on — repair in Whitton',
    title: 'PS5 won\'t turn on — repair in Whitton, Twickenham',
    metaDescription:
      'PS5 won\'t turn on? No-power repair in Whitton and Twickenham. No light, a click, or it dies before the logo. Free diagnosis, then a quote. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'No light, no fan and no beep when the power button is pressed',
      'A brief white light, then nothing, and it will not try again',
      'The console is dead after a move, a storm, or a spillage',
      'It seems dead, but a second cable in another socket brings it back — the lead or the wall socket was the fault',
    ],
    whatWeDo: [
      'No power is not a black screen. If you can hear the PS5 running and the pad connects, the television is the HDMI page, and a PS5 port repair is £70 when the socket is the fault. This page is the console that never starts.',
      'The first test is a known-good mains lead and a socket we know works. A surprising number of "dead" PS5s from Twickenham are the lead that lived behind the cabinet.',
      'If it still draws nothing, we open it. The power supply can fail on its own. So can a short on the board, including liquid metal that has bridged components and taken the console straight to dead. We do not condemn the PS5 until those have been separated, and we quote before parts are ordered.',
    ],
    parts:
      'A mains lead when that is the whole fault. Otherwise the internal power supply or a board repair, named on the quote. There is no flat "won\'t turn on" price.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'PS5 with no standby light, mains lead set aside so the internal supply can be tested',
    priceTable: [],
    faqs: [
      {
        q: 'Why won\'t my PS5 turn on?',
        a: 'Start with the mains lead, because we do. If a known-good lead does nothing, the fault is the internal supply or a short on the board. Diagnosis in Whitton is free. The price is the quote you approve, not a number on this page.',
      },
      {
        q: 'It beeps or flashes and then dies. Is that no power?',
        a: 'It is trying to start, which is a different list from a console with no light at all. Tell us which you have. Both are quoted after we see the machine. Neither is an HDMI repair.',
      },
      {
        q: 'Do you wipe a PS5 that will not turn on?',
        a: 'No. Getting it to power on does not format the SSD. If the drive is the reason it cannot boot, we say so before anything is erased.',
      },
      {
        q: 'How do I get it to the shop?',
        a: VISIT,
      },
    ],
    sections: [
      {
        heading: 'What to bring',
        paragraphs: [
          'The PS5 and the power lead. Leave the television at home. A controller is useful only if the console gets as far as a picture. Disc or digital, original or Slim: bring whichever you have.',
          'People come from Whitton itself and from Twickenham, Hounslow, Isleworth, Feltham and Teddington. If it died after a spill, say so before we power it. Liquid on the board is not the same ticket as a tired supply.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/playstation/keeps-turning-off/', label: 'PS5 keeps turning off' },
      { href: '/repairs/playstation/overheating-repair/', label: 'PS5 overheating repair' },
      { href: '/repairs/playstation/hdmi-port-repair/', label: 'PS5 HDMI port repair', note: '£70' },
      { href: '/repairs/xbox/no-power/', label: 'Xbox won\'t turn on' },
    ]),
  },
  {
    slug: 'xbox/overheating-repair',
    device: 'xbox',
    deviceLabel: 'Xbox',
    name: 'Overheating',
    h1: 'Xbox overheating repair in Whitton',
    title: 'Xbox overheating repair in Whitton, Twickenham',
    metaDescription:
      'Xbox overheating repair in Whitton for Series X, Series S and Xbox One. Loud fan or it shuts down after a game. Quoted after a free look. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'The fan roars a few minutes into a game and the case is hot along the vent',
      'Series X or Series S shuts down in a match and is fine again once it has cooled',
      'An Xbox One that has lived in a cabinet and now cuts out when the room is warm',
      'A burning or dusty smell from the vent, with no picture fault at all',
    ],
    whatWeDo: [
      'If the Xbox stays on and the screen says no signal, that is the HDMI page. Port repair there is £70. Overheating is the console that gets hotter until it protects itself.',
      'Series X, Series S and Xbox One do not cool the same way. A Series X uses liquid metal on the APU. Series S and the Xbox One models use thermal paste. Dust in the fan is common to all of them, and it is the first thing we check.',
      'We do not sell a clean as a cure-all. If the fan is packed and the console only fails when it is hot, the quote is for that. If the paste or the liquid metal has failed, or the fan no longer spins at the speed the board is asking for, the quote says so instead. You approve it or you take the Xbox home.',
    ],
    parts:
      'Cleaning, when dust is the fault. A fan, fresh paste on a Series S or Xbox One, or attention to the Series X liquid metal, only if the inspection shows that is the failure. No printed price.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'Xbox Series X vent and fan on the bench, dust removed before the cooling is judged',
    priceTable: [],
    faqs: [
      {
        q: 'How much does Xbox overheating repair cost in Whitton?',
        a: 'We do not print one. A dusty Series S and a Series X whose liquid metal has failed are not the same invoice. Diagnosis is free. Xbox HDMI port repair is the separate £70 job, and only when the socket is the fault.',
      },
      {
        q: 'Which Xbox models do you open for heat?',
        a: 'Series X, Series S, Xbox One, One S and One X. Tell us which, or bring it. The model is on the console.',
      },
      {
        q: 'Will you wipe my games to stop the shutdowns?',
        a: 'No. A cooling repair leaves profiles and installs where they are. We do not need your Microsoft password.',
      },
      {
        q: 'It only happens in one demanding game. Still heat?',
        a: 'Often, because that is when the APU actually works. If the fan note is normal and the case is not hot, we look elsewhere before we sell you a clean.',
      },
    ],
    sections: [
      {
        heading: 'Series X is not a Series S',
        paragraphs: [
          'A Series X on a carpet in Feltham pulls dust straight through the fan. A Series S in a Hounslow TV unit cooks itself with the doors closed. We will tell you if moving the console is the whole answer. We will also tell you if the cooling hardware has already failed and a better shelf will not save it.',
          'Isleworth, Teddington and Twickenham send the same machines. The shop is 23 High Street, Whitton, Twickenham TW2 7LB.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/xbox/keeps-turning-off/', label: 'Xbox keeps turning off' },
      { href: '/repairs/xbox/no-power/', label: 'Xbox won\'t turn on' },
      { href: '/repairs/xbox/hdmi-port-repair/', label: 'Xbox HDMI port repair', note: '£70' },
      { href: '/repairs/playstation/overheating-repair/', label: 'PS5 overheating repair' },
    ]),
  },
  {
    slug: 'xbox/keeps-turning-off',
    device: 'xbox',
    deviceLabel: 'Xbox',
    name: 'Keeps turning off',
    h1: 'Xbox keeps turning off — repair in Whitton',
    title: 'Xbox keeps turning off — repair in Whitton, Twickenham',
    metaDescription:
      'Xbox keeps turning off in Whitton and Twickenham. Series X, Series S and Xbox One that shut down and stay off. Free diagnosis, then a quote. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'It powers off in a game and stays off until you press the button again',
      'Series X or Series S dies with a cool case, so heat is not the obvious story',
      'An original Xbox One that cuts out, and the power-brick light changes or goes dark with it',
      'It shuts down on the dashboard, not only in one title',
    ],
    whatWeDo: [
      'If the Xbox reboots to the green startup screen by itself, that is the restart page, and the Series X version of that search is there. This page is a console that turns off and waits.',
      'Original Xbox One power bricks fail on their own and look exactly like a console that "keeps turning off". Bring the brick. We test the supply you use at home before we open the case. One S, One X, Series S and Series X have the supply inside.',
      'When the brick is healthy, or the model has no brick, we open the machine. Heat, the internal supply and a board fault are the list. A Series X can also shut down if the liquid metal on the APU has failed. The quote names the one we find. There is no flat shutdown price.',
    ],
    parts:
      'An external power brick, when an original Xbox One only needed that. Otherwise an internal supply, a cooling repair, or board work, quoted after the inspection. We do not fit parts "to see".',
    warranty: REPAIR_WARRANTY,
    photoShot: 'Xbox One power brick beside a Series X, both labelled before a shutdown test',
    priceTable: [],
    faqs: [
      {
        q: 'Why does my Xbox keep turning off?',
        a: 'On an original Xbox One, test the power brick first — bring it with you. On Series X, Series S, One S and One X the supply is inside, and heat or the board can look the same from the sofa. We separate them on the bench. The look is free.',
      },
      {
        q: 'Is this the same as overheating?',
        a: 'Only when the case is hot or the fan has been roaring. A cool Xbox that dies is not a clean we can honestly sell you. The overheating page is the heat job. This page is the wider shutdown.',
      },
      {
        q: 'Will my account be reset?',
        a: 'No. Shutting-down repairs do not factory-reset the console. Saves that synced to your Xbox account are in the account. Local installs stay unless the drive has failed, and we say so first.',
      },
      {
        q: 'Can I walk in?',
        a: VISIT,
      },
    ],
    sections: [
      {
        heading: 'Bring the brick if it has one',
        paragraphs: [
          'An original Xbox One without its power brick cannot be tested properly. Series X and Series S have nothing extra to carry. The controller is optional. The television is not needed.',
          'The bench is in Whitton. Consoles come in from Twickenham, Hounslow, Isleworth, Feltham and Teddington. Call 07918 440326 if you want to know we are open before you set off. Hours are Monday to Friday 09:00–18:00, Saturday 10:30–17:00, Sunday closed.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/xbox/overheating-repair/', label: 'Xbox overheating repair' },
      { href: '/repairs/xbox/random-restart/', label: 'Xbox Series X restarting' },
      { href: '/repairs/xbox/no-power/', label: 'Xbox won\'t turn on' },
      { href: '/repairs/playstation/keeps-turning-off/', label: 'PS5 keeps turning off' },
    ]),
  },
  {
    slug: 'xbox/random-restart',
    device: 'xbox',
    deviceLabel: 'Xbox',
    name: 'Random restart',
    h1: 'Xbox Series X restarting fix in Whitton',
    title: 'Xbox Series X restarting fix in Whitton, Twickenham',
    metaDescription:
      'Xbox Series X restarting fix in Whitton and Twickenham. The console reboots to the startup screen. Series S as well. Quoted after diagnosis. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'Series X drops out of a game and boots back through the green startup screen on its own',
      'Series S does the same, with no second video port to blame',
      'It restarts on the home screen, so one badly installed game is not enough of an explanation',
      'An Xbox One that reboots rather than staying off, brick light still steady',
    ],
    whatWeDo: [
      'A restart is the console coming back by itself. If it stays off, use the "keeps turning off" page. If it never starts, use "won\'t turn on". Mixing those three into one quote is how people pay for the wrong repair.',
      'On a Series X we check whether the fan and the liquid metal are forcing a protective reboot, or whether the restart happens with the case still cool. A cool restart points at power on the board or at storage, not at a clean.',
      'Series S uses paste, not liquid metal, and has no disc drive. An Xbox One can reboot because the supply is dipping, which is why the brick comes in with the console. We name the fault after it is open. The figure is the quote, not a menu price.',
    ],
    parts:
      'Cooling work when heat is forcing the reboot. Storage or a board repair when it is not. Each is quoted separately. There is no printed "restarting fix" price.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'Xbox Series X at the green startup screen on the bench, after a restart the customer could repeat',
    priceTable: [],
    faqs: [
      {
        q: 'Why does my Xbox Series X keep restarting?',
        a: 'Either it is protecting itself from heat, or power or storage is dropping out and the console boots again. We check the fan and the liquid metal when the case was hot, and we look elsewhere when it was not. Diagnosis in Whitton is free.',
      },
      {
        q: 'Do you see the same fault on Series S?',
        a: 'Yes. Series S, Series X, and Xbox One, One S and One X. The Series X page is the one people search for. The bench work follows the model in front of us.',
      },
      {
        q: 'I already reinstalled a game. Was that a waste of time?',
        a: 'Only if the restart is limited to that game. If the home screen reboots as well, the reinstall was never going to hold. Tell us what you have already tried so we do not repeat it.',
      },
      {
        q: 'Does a restart repair wipe the Xbox?',
        a: 'No. Profiles stay. We do not need your Microsoft password, and we do not factory-reset the console as part of finding a restart.',
      },
    ],
    sections: [
      {
        heading: 'What "a restarting fix" is not',
        paragraphs: [
          'It is not a software ritual we run on every Series X, and it is not the HDMI repair. HDMI is £70 when the socket is the fault, and the console stays on while the screen stays black. A restart never gives you a picture to lose.',
          'Bring the console and, for an original Xbox One, the power brick. From Twickenham, Hounslow, Isleworth, Feltham or Teddington that is the whole kit. The address is 23 High Street, Whitton, Twickenham TW2 7LB.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/xbox/keeps-turning-off/', label: 'Xbox keeps turning off' },
      { href: '/repairs/xbox/overheating-repair/', label: 'Xbox overheating repair' },
      { href: '/repairs/xbox/no-power/', label: 'Xbox won\'t turn on' },
      { href: '/repairs/playstation/random-restart/', label: 'PS5 random restart' },
    ]),
  },
  {
    slug: 'xbox/no-power',
    device: 'xbox',
    deviceLabel: 'Xbox',
    name: 'No power',
    h1: 'Xbox won\'t turn on — repair in Whitton',
    title: 'Xbox won\'t turn on repair in Whitton, Twickenham',
    metaDescription:
      'Xbox won\'t turn on? Repair in Whitton and Twickenham for Series X, Series S and Xbox One. No light, or a dead power brick. Free diagnosis. Call 07918 440326.',
    fromPrice: 'Quote',
    turnaround: 'After diagnosis',
    quoteOnly: true,
    faultLooksLike: [
      'No light at all on a Series X or Series S when the button is pressed',
      'An original Xbox One whose power brick stays dark, or never gives the console a chance to start',
      'A click or a flash, then silence, and it will not try again',
      'The console is written off as dead, but the controller still thinks it is on — that is often HDMI, not power',
    ],
    whatWeDo: [
      '"Won\'t turn on" from the sofa is sometimes a console that is on and producing no picture. If the controller connects and you can hear a disc or a fan, read the HDMI page before this one. That port repair is £70. This page is no life at all.',
      'Original Xbox One bricks die and take the blame with them. Bring the brick. Replacing a console that only needed a power supply is a bad outcome, and we will not do it. One S, One X, Series S and Series X have the supply inside the case.',
      'With the right supply ruled out, we open the machine and test whether the board is shorted or the internal supply has failed. A Series X that died after getting very hot may also have liquid-metal damage. We quote the repair that matches the inspection, and you can refuse it.',
    ],
    parts:
      'A power brick on an original Xbox One, when the brick is the fault. An internal supply or a board repair on the other models. Quoted after diagnosis. No flat "won\'t turn on" price.',
    warranty: REPAIR_WARRANTY,
    photoShot: 'Xbox with no power light, original One brick and a Series X supply area both in shot before a verdict',
    priceTable: [],
    faqs: [
      {
        q: 'Why won\'t my Xbox turn on?',
        a: 'On an original Xbox One, the power brick is the first test, so bring it. On Series X and Series S the supply is inside. A free look at 23 High Street separates a dead supply from a dead board. We do not print a price for either.',
      },
      {
        q: 'The controller turns on a console I cannot see. Is that this page?',
        a: 'Probably not. That is often HDMI: the Xbox is running and the television has no picture. Series S has no other video output, so it looks fatal. The HDMI repair is £70 when the socket is the fault.',
      },
      {
        q: 'Do you repair Series X, Series S and Xbox One?',
        a: 'Yes. Series X, Series S, Xbox One, One S and One X. No power on each of them is quoted after we see it, because the supplies are not interchangeable.',
      },
      {
        q: 'Where is the repair done?',
        a: `${VISIT} People bring dead Xbox consoles in from Twickenham, Hounslow, Isleworth, Feltham and Teddington as well as Whitton.`,
      },
    ],
    sections: [
      {
        heading: 'Dead, and merely dark',
        paragraphs: [
          'A Series S with a broken HDMI port has no second way to show a picture, so families describe it as "won\'t turn on" when the console is awake. We check for that before we price a power supply. The two repairs are not close.',
          'If it truly never starts, leave the television at home and bring the power brick when the model has one. Diagnosis is free. Monday to Friday 09:00–18:00, Saturday 10:30–17:00, Sunday closed.',
        ],
      },
    ],
    related: links([
      { href: '/repairs/xbox/hdmi-port-repair/', label: 'Xbox HDMI port repair', note: '£70' },
      { href: '/repairs/xbox/keeps-turning-off/', label: 'Xbox keeps turning off' },
      { href: '/repairs/xbox/overheating-repair/', label: 'Xbox overheating repair' },
      { href: '/repairs/playstation/no-power/', label: 'PS5 won\'t turn on' },
    ]),
  },
];
