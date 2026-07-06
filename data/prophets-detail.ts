/**
 * Extended, prophet-only content shown on the figure detail screen.
 *
 * Mirrors data/disciples-detail.ts: the generic `Figure` carries the shared
 * card fields, and this adds the richer biography keyed by figure `id`. Fields
 * whose source is church/Jewish tradition rather than scripture are flagged so
 * the UI can label them.
 */

import type { Bilingual } from '@/data/disciples-detail';
import type { Lang } from '@/data/figures';

export type ProphetDetail = {
  background: Bilingual;
  historicalContext: Bilingual;
  calling: Bilingual;
  /** True when `calling` comes from tradition rather than scripture. */
  callingTradition: boolean;
  notableMoments: Record<Lang, string[]>;
  bookOverview: Bilingual;
  legacy: Bilingual;
  /** True when `legacy` comes from tradition rather than scripture. */
  legacyTradition: boolean;
  reference: string;
};

export const PROPHET_DETAILS: Record<string, ProphetDetail> = {
  isaiah: {
    background: {
      en: "Likely from an aristocratic Jerusalem family with access to the royal court; married to 'the prophetess' and father of sons whose names carried symbolic meaning.",
      sn: "Zvinofungidzirwa kuti aibva mumhuri yepamusoro yeJerusarema yaiva nemukana wekusvika kudare ramambo; akaroorana ne'muporofitakadzi' uye baba vevanakomana vaiva nemazita ane zvinoreva.",
    },
    historicalContext: {
      en: 'Ministered in Judah for roughly 40 years, across the reigns of kings Uzziah, Jotham, Ahaz, and Hezekiah, during the rise of the Assyrian Empire.',
      sn: 'Akashumira muJudha kwemakore anenge 40, mumazera amambo Uzia, Jotamu, Ahazi, naHezekiya, panguva yekukura kweUmambo hweAsiriya.',
    },
    calling: {
      en: "Called through a dramatic vision of God enthroned in the temple, surrounded by seraphim, where his lips were symbolically purified with a burning coal before he volunteered, 'Here am I, send me.'",
      sn: "Akadanwa kuburikidza nechiratidzo chinoshamisa chaMwari agere pachigaro chake mutemberi, akakomberedzwa nemaserafi, apo miromo yake yakanatswa nedombo rinopisa asati azvipira kuti, 'Ndiri pano, nditumei.'",
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Confronted King Ahaz, urging him to trust God rather than foreign alliances, and gave the sign of a child called Immanuel.',
        "Prophesied in vivid detail about a coming 'suffering servant' who would bear the sins of the people, later understood by Christians as pointing to Jesus.",
        'Walked around Jerusalem barefoot and stripped for three years as a living symbol of coming exile and shame for Egypt and Cush.',
      ],
      sn: [
        'Akasangana naMambo Ahazi, achimukurudzira kuvimba naMwari panzvimbo yesungano nendudzi dzekunze, uye akapa chiratidzo chemwana ainzi Imanueri.',
        "Akaporofita zvakadzama pamusoro pe'muranda anotambura' aizotakura zvivi zvevanhu, gare gare achinzwisiswa nemaKristu sekunongedzera kuna Jesu.",
        'Akafamba muJerusarema asina shangu uye asina nguo kwemakore matatu sechiratidzo chipenyu cheutapwa nekunyadziswa kuchauya kuEgipita neKushi.',
      ],
    },
    bookOverview: {
      en: '66 chapters, often divided by scholars into an earlier section of judgment (1-39) and a later section of comfort and restoration (40-66).',
      sn: 'Zvitsauko 66, zvinowanzokamurwa nevadzidzisi kuita chikamu chekutanga chekutongwa (1-39) nechikamu chekupedzisira chenyaradzo nekuvandudzwa (40-66).',
    },
    legacy: {
      en: 'Jewish tradition holds that he was martyred by being sawn in half during the reign of the wicked King Manasseh, though this account is not in the Bible itself.',
      sn: 'Tsika yechiJudha inoti akafira nokuchekwa nesaw pakati panguva yaMambo Manase akaipa, kunyange zvazvo nyaya iyi isiri muBhaibheri chairo.',
    },
    legacyTradition: true,
    reference: 'Isaiah 6:1-8, Isaiah 7:14, Isaiah 20:1-6, Isaiah 53',
  },
  jeremiah: {
    background: {
      en: 'Born into a priestly family in the small town of Anathoth, near Jerusalem; called by God while still very young and felt too inexperienced to speak.',
      sn: 'Akaberekerwa mumhuri yechipristi mudunhu diki reAnatoti, pedyo neJerusarema; akadanwa naMwari achiri mudiki uye ainzwa asina ruzivo rwakakwana rwekutaura.',
    },
    historicalContext: {
      en: 'Ministered for over 40 years through the final kings of Judah, up to and beyond the fall of Jerusalem to Babylon in 586 BC.',
      sn: 'Akashumira kwemakore anopfuura 40 kubudikidza namambo vekupedzisira veJudha, kusvika uye achipfuura kuwa kweJerusarema kuBhabhironi muna 586 BC.',
    },
    calling: {
      en: "God told him, 'Before I formed you in the womb I knew you,' and appointed him a prophet to the nations despite his protest that he was only a youth.",
      sn: "Mwari akamuudza kuti, 'Ndisati ndakuumba muchizvaro, ndakakuziva,' uye akamugadza semuporofita kundudzi kunyange achipikisa kuti aiva mudiki chete.",
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Wore a wooden, and later an iron, yoke around his neck as a public sign that Judah should submit to Babylon rather than resist.',
        'Was thrown into an empty cistern and left to sink in the mud for prophesying surrender, and was rescued only by a sympathetic court official.',
        'Watched King Jehoiakim cut up and burn a scroll of his prophecies section by section, then simply dictated it all again with additions.',
        'Remained in Jerusalem through its final siege and destruction, then was forcibly taken to Egypt by fellow Judeans fleeing Babylonian reprisals.',
      ],
      sn: [
        'Akapfeka joko rematanda, gare gare rematare, mumutsipa make sechiratidzo chevanhu kuti Judha inofanira kuzvipira kuBhabhironi panzvimbo yekurwisa.',
        'Akakandwa mugomba risina mvura akasiiwa achinyura mumatope nokuda kwokuporofita kuzvipira, uye akaponeswa chete nemukuru wedare aimunzwira tsitsi.',
        'Akaona Mambo Jehoiakimi achicheka nekupisa gwaro remauporofita ake chikamu nechikamu, achibva angodudza zvose zvakare achiwedzera zvimwe.',
        'Akaramba ari muJerusarema kusvika pakukombwa nekuparadzwa kwaro, ndokuzomanikidzwa kuenda kuEgipita nevamwe vaJudha vaitiza kutsiva kweBhabhironi.',
      ],
    },
    bookOverview: {
      en: "52 chapters of prophecy, laments, and narrative, considered the longest book in the Bible by word count; also traditionally credited with the short book of Lamentations, mourning Jerusalem's destruction.",
      sn: 'Zvitsauko 52 zvemauporofita, kuchema, uye nhoroondo, zvinoonekwa sebhuku refu kupfuura ose muBhaibheri pamashoko; anonziwo akanyora bhuku pfupi reMariro, rinochema kuparadzwa kweJerusarema.',
    },
    legacy: {
      en: 'Tradition holds he was eventually stoned to death by his own countrymen in Egypt for continuing to confront them over idolatry.',
      sn: 'Tsika inoti akazoponwa nematombo nevamwe vaJudha vavo kuEgipita nokuda kwekuramba achivatsiura nezvekunamata zvidhori.',
    },
    legacyTradition: true,
    reference: 'Jeremiah 1:4-10, Jeremiah 27:1-11, Jeremiah 36, Jeremiah 38:1-13, Jeremiah 43-44',
  },
  ezekiel: {
    background: {
      en: "A priest by training, deported to Babylon in an earlier wave of exile alongside King Jehoiachin, years before Jerusalem's final fall.",
      sn: 'Aiva mupristi nedzidzo yake, akaendeswa kuBhabhironi mune imwe nguva yekutanga yeutapwa pamwe naMambo Jehoiakini, makore Jerusarema risati rawa zvachose.',
    },
    historicalContext: {
      en: 'Prophesied entirely from within the exile community in Babylon, addressing fellow captives who still hoped Jerusalem would be spared.',
      sn: 'Akaporofita achiri mukati menharaunda yevatapwa kuBhabhironi, achitaura kune vamwe vakatapwa vaicharamba vaine tariro yekuti Jerusarema richanunurwa.',
    },
    calling: {
      en: 'Called through an overwhelming vision of a divine throne-chariot with four living creatures, after which he was told to eat a scroll that tasted as sweet as honey.',
      sn: 'Akadanwa kuburikidza nechiratidzo chinotyisa chengoro-chigaro chaMwari chine zvisikwa zvipenyu zvina, mushure mezvo akaudzwa kuti adye gwaro raitapira sehuchi.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        "Lay on his side for over a year, symbolically bearing the years of Israel's and Judah's sin, as a public sign to the exiles.",
        'Was told not to publicly mourn when his own wife died suddenly, as a sign of the shock that would come when the temple fell.',
        "Received the famous vision of a valley of dry bones coming back to life, symbolizing God's promise to restore Israel.",
        'Was given a detailed architectural vision of a future, idealized temple in his closing chapters.',
      ],
      sn: [
        'Akarara nechokumativi kwegore rakapfuura sezvinoreva chiratidzo chekutakura makore ezvivi zveIsraeri neJudha, sechiratidzo kuvatapwa.',
        'Akaudzwa kuti asachema pachena mudzimai wake paakangofa pakarepo, sechiratidzo chekushamisika kwaizouya kana temberi ikawa.',
        'Akapiwa chiratidzo chinozivikanwa chemupata wemapfupa akaoma achidzoserwa upenyu, chinoratidza vimbiso yaMwari yekuvandudza Israeri.',
        'Akapiwa chiratidzo chakadzama chezvivakwa zvetemberi yeramangwana, yakakwana, muzvitsauko zvake zvekupedzisira.',
      ],
    },
    bookOverview: {
      en: '48 chapters combining dramatic visions, symbolic acts, and detailed prophecy, moving from judgment on Jerusalem to hope for restoration.',
      sn: 'Zvitsauko 48 zvinosanganisa zviratidzo zvinotyisa, zviito zvine zvinoreva, uye uporofita hwakadzama, zvichifamba kubva pakutongwa kweJerusarema kusvika patariro yekuvandudzwa.',
    },
    legacy: {
      en: 'Jewish tradition holds he was killed by fellow exiles for rebuking them over idolatry, though this is not recorded in scripture.',
      sn: 'Tsika yechiJudha inoti akaurayiwa nevamwe vakatapwa nokuda kwekuvatsiura pamusoro pekunamata zvidhori, kunyange zvazvo izvi zvisina kunyorwa muBhaibheri.',
    },
    legacyTradition: true,
    reference: 'Ezekiel 1, Ezekiel 3:1-3, Ezekiel 4:4-6, Ezekiel 24:15-18, Ezekiel 37:1-14, Ezekiel 40-48',
  },
  daniel: {
    background: {
      en: 'Likely from a noble or royal Judean family, taken as a young man to Babylon and trained for service in the royal court alongside three companions.',
      sn: 'Zvinofungidzirwa kuti aibva mumhuri ine ukuru kana yeumambo yeJudha, akatorwa achiri jaya achiendeswa kuBhabhironi ndokudzidziswa kushumira mudare ramambo pamwe neshamwari nhatu.',
    },
    historicalContext: {
      en: 'Served across several reigns and empires, from Nebuchadnezzar of Babylon through to the Persian conquest under Darius and Cyrus.',
      sn: 'Akashumira kubudikidza nemazera akasiyana neumambo, kubva kuna Nebhukadhinezari weBhabhironi kusvika pakukundwa nevaPezhiya pasi paDariusi naSaisi.',
    },
    calling: {
      en: 'Rose to prominence not through a single dramatic call but through consistently interpreting dreams and visions that other advisors could not explain.',
      sn: 'Akakwira panzvimbo yepamusoro kwete nechiratidzo chimwe chinoshamisa asi nokutsanangura zviroto nezviratidzo nguva nenguva izvo vamwe vapi vemazano vaisagona kutsanangura.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        "Refused to eat the king's rich food and wine, choosing vegetables and water instead, and was found healthier than those who ate the royal diet.",
        "Interpreted King Nebuchadnezzar's troubling dream of a great statue representing a succession of world empires.",
        'Was thrown into a den of lions for continuing to pray to God despite a royal decree forbidding it, and was found unharmed the next morning.',
        "Received detailed visions of four beasts and a prophecy of seventy 'weeks' concerning the future of Jerusalem and the coming of an anointed one.",
      ],
      sn: [
        'Akaramba kudya chikafu chamambo chakanaka newaini, achisarudza miriwo nemvura, ndokuzowanikwa akasimba kupfuura avo vaidya zvekudya zvamambo.',
        'Akatsanangura chiroto chinotyisa chaMambo Nebhukadhinezari chemufananidzo mukuru unomirira kutevedzana kwehumambo hwenyika.',
        'Akakandwa mugomba reshumba nokuda kwekuramba achinamata kuna Mwari kunyange paiva nemurau wamambo waizvidzivisa, ndokuwanikwa asina kukuvara mangwana acho.',
        "Akapiwa zviratidzo zvakadzama zvezvikara zvina neuporofita hwe'masvondo' makumi manomwe pamusoro peramangwana reJerusarema nekuuya kwemuzodziwa.",
      ],
    },
    bookOverview: {
      en: '12 chapters split between court narratives (1-6) and apocalyptic visions (7-12), written partly in Hebrew and partly in Aramaic.',
      sn: 'Zvitsauko 12 zvakakamurwa pakati penhoroondo dzedare (1-6) nezviratidzo zvechiapokariputi (7-12), zvakanyorwa chimwe muchiHebheru chimwe muchiAramaiki.',
    },
    legacy: {
      en: 'Scripture records he lived to see the fall of Babylon to the Medo-Persian empire and continued serving into old age under the new regime.',
      sn: 'Bhaibheri rinonyora kuti akararama kusvikira aona kuwa kweBhabhironi kuumambo hweMedhia-Pezhiya uye akaramba achishumira kusvika ave mutana pasi pehutongi hutsva.',
    },
    legacyTradition: false,
    reference: 'Daniel 1:8-16, Daniel 2, Daniel 6, Daniel 7-9',
  },
  hosea: {
    background: {
      en: 'A prophet to the Northern Kingdom of Israel, whose personal life became the central illustration of his entire message.',
      sn: 'Muporofita weUmambo hwokuChamhembe hweIsraeri, ane hupenyu hwake hwepachake hwakava mufananidzo mukuru weshoko rake rose.',
    },
    historicalContext: {
      en: 'Ministered during the final, morally and politically unstable decades of the Northern Kingdom before its fall to Assyria.',
      sn: 'Akashumira munguva dzekupedzisira, dzisina kugadzikana pane zvematongerwo enyika neuenzanisi, dzeUmambo hwokuChamhembe risati rawa kuAsiriya.',
    },
    calling: {
      en: "Commanded by God to marry a woman who would be unfaithful to him, as a living picture of Israel's unfaithfulness to God.",
      sn: 'Akarayirwa naMwari kuti aroore mukadzi aizova asina kutendeka kwaari, semufananidzo mupenyu wekusatendeka kwaIsraeri kuna Mwari.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        "Named his children Jezreel, 'Not Loved,' and 'Not My People' as walking symbols of coming judgment on Israel.",
        "Went and bought his own wife back after she left him for other relationships, illustrating God's persistent love for a wayward people.",
        'Described God\'s love in strikingly tender, parental language, comparing His care for Israel to teaching a child to walk.',
      ],
      sn: [
        "Akatumidza vana vake Jezrieri, 'Asingadiwe,' uye 'Havasi vanhu vangu' sezviratidzo zvipenyu zvekutongwa kuchauya kuIsraeri.",
        'Akaenda ndokutenga mudzimai wake iyeye mushure mekunge amusiya achienda kune vamwe, achiratidza rudo rwaMwari rusingaregi kune vanhu vanotsauka.',
        'Akatsanangura rudo rwaMwari nemashoko erudo rwakadzama sorwababa, achienzanisa kuchengeta kwake Israeri sokudzidzisa mwana kufamba.',
      ],
    },
    bookOverview: {
      en: "14 chapters combining Hosea's personal story with poetic oracles of judgment and restoration for Israel.",
      sn: 'Zvitsauko 14 zvinosanganisa nyaya yaHosea pachake nemashoko enhetembo ekutongwa nekuvandudzwa kweIsraeri.',
    },
    legacy: {
      en: "Little is recorded of his later life or death; his book's central image of redeeming love became one of the most quoted metaphors in later scripture.",
      sn: 'Hapana zvakawanda zvakanyorwa nezvehupenyu hwake hwepashure kana rufu rwake; mufananidzo mukuru webhuku rake werudo rwekudzikinura wakava mumwe wemifananidzo inowanzoshandiswa muBhaibheri gare gare.',
    },
    legacyTradition: true,
    reference: 'Hosea 1, Hosea 3, Hosea 11:1-4',
  },
  joel: {
    background: {
      en: "Very little is known of his personal life; his name means 'The Lord is God,' and he is identified only as the son of Pethuel.",
      sn: "Zvishoma zvinozivikanwa nezvehupenyu hwake hwega; zita rake rinoreva 'Jehovha ndiMwari,' uye anongonzi mwanakomana waPetueri.",
    },
    historicalContext: {
      en: 'The exact time period of his ministry is debated among scholars, since his book contains few specific historical markers.',
      sn: 'Nguva chaiyo yeushumiri hwake inopokana pakati pevadzidzisi, sezvo bhuku rake risina zviratidzo zvakawanda zvenhoroondo chaidzo.',
    },
    calling: {
      en: 'Not described in detail; his book opens directly with a description of a devastating locust plague used as a call to repentance.',
      sn: 'Haina kutsanangurwa zvakadzama; bhuku rake rinovhurwa nokutsanangura denda remhashu rinoparadza rinoshandiswa sedanho rekutendeuka.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Described a locust plague in such vivid, army-like terms that it doubles as a picture of an invading military force.',
        "Called priests and people alike to genuine repentance, urging them to 'rend your heart and not your garments.'",
        'Prophesied that God would one day pour out His Spirit on all people, a promise Peter would later declare fulfilled at Pentecost.',
      ],
      sn: [
        'Akatsanangura denda remhashu nemashoko akadzama, akaita sehondo, zvinoita kuti riite mufananidzo wehondo inopinda munyika.',
        "Akadana vapristi nevanhu vose kuti vatendeuke chaizvo, achivakurudzira kuti 'bvarurai mwoyo yenyu kwete nguo dzenyu.'",
        'Akaporofita kuti Mwari aizozoburitsa Mweya wake pamusoro pevanhu vose, vimbiso yaizozonzi yazadzikiswa naPetro paPendekosti.',
      ],
    },
    bookOverview: {
      en: '3 short chapters moving from present crisis and repentance to future restoration and the outpouring of the Spirit.',
      sn: 'Zvitsauko 3 zvipfupi zvinofamba kubva pakutambudzika kwezvino nekutendeuka kusvika patariro yeramangwana nekudururwa kwoMweya.',
    },
    legacy: {
      en: "His prophecy of the Spirit being poured out on 'all flesh' became a foundational text for the early church's understanding of Pentecost.",
      sn: "Uporofita hwake hwokudururwa kwoMweya pamusoro pe'nyama yose' hwakava rugwaro runokosha rwekunzwisisa kwechechi yekutanga pamusoro pePendekosti.",
    },
    legacyTradition: false,
    reference: 'Joel 1-2, Joel 2:28-32, Acts 2:16-21',
  },
  amos: {
    background: {
      en: 'A shepherd and farmer from Tekoa in Judah, not trained as a professional prophet, who was sent north to confront a different kingdom entirely.',
      sn: 'Mufudzi nemurimi aibva kuTekoa muJudha, asina kudzidziswa somuporofita webasa, akatumwa kuchamhembe kunosangana neumwe umambo hwakasiyana zvachose.',
    },
    historicalContext: {
      en: 'Ministered during a period of prosperity and outward religious activity in Israel, but also widespread exploitation of the poor.',
      sn: 'Akashumira munguva yekubudirira uye mabasa echitendero panze muIsraeri, asiwo nekumanikidzwa kwakapararira kwevarombo.',
    },
    calling: {
      en: 'Insisted he was not a professional prophet or from a prophetic family, but that God took him from tending sheep and sent him to prophesy.',
      sn: 'Akasimbisa kuti aisava muporofita webasa kana anobva mumhuri yechiporofita, asi kuti Mwari akamutora achifudza makwai ndokumutuma kunoporofita.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Was confronted by the priest Amaziah at Bethel and told to go back home to Judah and stop prophesying there.',
        'Received a vision of God holding a plumb line against a wall, symbolizing Israel being measured and found crooked.',
        "Condemned the wealthy for 'selling the needy for a pair of sandals' and for lying on beds of ivory while ignoring the poor.",
      ],
      sn: [
        'Akasangana nemupristi Amaziya paBheteri ndokuudzwa kuti adzokere kumusha kuJudha uye arege kuporofita ikoko.',
        'Akapiwa chiratidzo chaMwari akabata chiyero chinoenzanisira parusvingo, chinoratidza Israeri ichiyerwa uye ichionekwa yakaminama.',
        "Akashoora vapfumi nokuda kwe'kutengesa varombo nokuda kwepea yeshangu' uye kurara panhoo dzenyanga dzenzou vachishaya hanya nevarombo.",
      ],
    },
    bookOverview: {
      en: '9 chapters of oracles against surrounding nations and Israel itself, ending with a brief promise of future restoration.',
      sn: 'Zvitsauko 9 zvemashoko ekutongwa pamusoro pendudzi dzakapoteredza uye Israeri pachayo, zvichipedzisira nevimbiso pfupi yekuvandudzwa kweramangwana.',
    },
    legacy: {
      en: 'Remembered as one of the earliest and most direct biblical voices for social justice and honest worship over empty ritual.',
      sn: 'Anorangarirwa somumwe wemazwi ekutanga uye anonanga zvakanyanya muBhaibheri pamusoro pekururamisira kwevanhu nokunamata kwechokwadi panzvimbo yetsika dzisina zvazvinoreva.',
    },
    legacyTradition: true,
    reference: 'Amos 1:1, Amos 7:10-15, Amos 7:7-9, Amos 8:4-6',
  },
  obadiah: {
    background: {
      en: "Almost nothing is known of him personally beyond his name, which means 'servant of the Lord'; several other Obadiahs appear elsewhere in scripture, but their identities are not clearly connected to him.",
      sn: "Hapana zvakawanda zvinozivikanwa nezvake ari oga kunze kwezita rake, rinoreva 'muranda waJehovha'; vamwe vaObhadhiya vanoonekwa kune dzimwe nzvimbo muBhaibheri, asi hazvina kunyatsotsanangurwa kuti vane hukama naye.",
    },
    historicalContext: {
      en: 'Likely responding to Edom\'s actions during or shortly after the Babylonian destruction of Jerusalem, when Edom is accused of gloating over and looting its neighbor.',
      sn: 'Zvinofungidzirwa kuti aipindura pamusoro pezviito zveEdhomu panguva kana pasina kupfuura nguva refu mushure mekuparadzwa kweJerusarema neBhabhironi, apo Edhomu inopomerwa mhosva yekufarira nekuba muvakidzani wayo.',
    },
    calling: {
      en: 'Not described; the book opens directly as a vision concerning Edom, without a personal call narrative.',
      sn: 'Haina kutsanangurwa; bhuku rinovhurwa richingotanga sechiratidzo pamusoro peEdhomu, pasina nyaya yekudanwa kwake ari oga.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        "Condemned Edom's pride, quoting their boast that their mountain fortress made them untouchable.",
        'Accused Edom of standing aloof, and even participating, while foreigners looted Jerusalem and cast lots for its people.',
        'Promised that the tables would eventually turn, with deliverance for Israel and judgment falling back on Edom.',
      ],
      sn: [
        'Akashoora kuzvikudza kweEdhomu, achidudza kuzvirumbidza kwavo kuti gomo ravo rakavakwa nesimba raiita kuti vasakwanise kubatwa.',
        'Akapomera Edhomu mhosva yekumira kure, kunyange kubatana, apo vatorwa vaiba Jerusarema uye vachikanda mijenya pamusoro pevanhu varo.',
        'Akavimbisa kuti zvinhu zvaizoshanduka, nokununurwa kwaizouya kuIsraeri uye kutongwa kuchidzokera kuEdhomu.',
      ],
    },
    bookOverview: {
      en: 'The shortest book in the Old Testament, just 21 verses in a single chapter.',
      sn: 'Bhuku rakapfupisisa muTestamende Yekare, ndima 21 chete muchitsauko chimwe chete.',
    },
    legacy: {
      en: 'Serves in Jewish and Christian tradition as a powerful short statement that pride and cruelty toward the vulnerable will ultimately be judged.',
      sn: 'Rinoshanda mutsika dzechiJudha nedzechiKristu semashoko mapfupi ane simba ekuti kuzvikudza neutsinye kune vasina simba kuchapedzisira kwatongwa.',
    },
    legacyTradition: true,
    reference: 'Obadiah 1:1-4, Obadiah 1:10-14, Obadiah 1:17-21',
  },
  jonah: {
    background: {
      en: 'Identified elsewhere in scripture as a prophet from Gath Hepher in Israel who had previously prophesied territorial expansion for the Northern Kingdom.',
      sn: 'Anozivikanwa kune dzimwe nzvimbo muBhaibheri semuporofita aibva kuGati Hefa muIsraeri uyo aimboporofita kukura kwenyika kweUmambo hwokuChamhembe.',
    },
    historicalContext: {
      en: 'Sent to Nineveh, the capital of Assyria, a powerful and feared enemy of Israel, making his mission deeply unwelcome to him personally.',
      sn: 'Akatumwa kuNinevhe, guta guru reAsiriya, muvengi ane simba uye anotyisa waIsraeri, izvo zvakaita kuti basa rake risadiwa naye pachake.',
    },
    calling: {
      en: 'Directly commanded by God to go and preach against Nineveh\'s wickedness, but instead boarded a ship heading in the opposite direction.',
      sn: 'Akarayirwa naMwari chaiye kuti aende anoparidza pamusoro pezvakaipa zveNinevhe, asi panzvimbo pezvo akakwira chikepe chaienda kune rumwe rutivi.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Was thrown overboard during a violent storm at his own suggestion, after sailors realized his flight from God had caused it.',
        'Was swallowed by a great fish and survived three days and nights inside it, praying a psalm of distress and thanksgiving.',
        'Preached a short message of judgment to Nineveh, and to his own frustration, the entire city repented and was spared.',
        'Sat outside the city angry at God\'s mercy, and was taught a lesson about compassion through a plant that God caused to grow and then wither.',
      ],
      sn: [
        'Akakandwa mumvura panguva yedutu rine simba nokuda kwezano rake, mushure mevafambisi vengarava vaziva kuti kutiza kwake Mwari ndiko kwakonzera dutu iri.',
        'Akamedzwa nehove huru ndokupona mazuva matatu nemasikati mukati mayo, achinamata pisarema rekutambudzika nekuonga.',
        'Akaparidza shoko pfupi rokutongwa kuNinevhe, uye zvichimugumbura, guta rose rakatendeuka rikaponeswa.',
        'Akagara kunze kweguta akatsamwira ngoni dzaMwari, ndokudzidziswa nezvenyasha kuburikidza nomuti waMwari waakaita kuti umere ndokuoma.',
      ],
    },
    bookOverview: {
      en: "4 short chapters told mostly as narrative rather than oracle, unusual among the prophetic books for focusing on the prophet's own reluctance.",
      sn: 'Zvitsauko 4 zvipfupi zvinotaurwa zvakanyanya senhoroondo panzvimbo pemashoko euporofita, zvisiri zvenguva dzose pakati pemabhuku euporofita nokuda kwekutarisa kusada kwomuporofita pachake.',
    },
    legacy: {
      en: "Jesus later referenced Jonah's three days in the fish as a sign pointing to His own death and resurrection.",
      sn: 'Jesu gare gare akataura nezvemazuva matatu aJona ari mukati mehove sechiratidzo chinonongedzera kurufu nokumuka kwake.',
    },
    legacyTradition: false,
    reference: 'Jonah 1-2, Jonah 3, Jonah 4, Matthew 12:39-41',
  },
  micah: {
    background: {
      en: 'From the small town of Moresheth in Judah, a rural contemporary of the prophet Isaiah who spoke with a similarly direct and forceful voice.',
      sn: 'Aibva kudunhu diki reMoresheti muJudha, hama yenguva imwe chete yomuporofita Isaya aitaura nezwi rakananga uye rine simba zvakafanana.',
    },
    historicalContext: {
      en: 'Ministered during the reigns of Jotham, Ahaz, and Hezekiah, addressing both the Northern and Southern Kingdoms as Assyrian power grew.',
      sn: 'Akashumira munguva yamambo Jotamu, Ahazi, naHezekiya, achitaura kuUmambo hwokuChamhembe nehwokuMaodzanyemba pasimba reAsiriya richikura.',
    },
    calling: {
      en: "Described himself as filled with the Spirit and power of the Lord to declare Israel's sin, without a separate detailed call narrative.",
      sn: 'Akazvitsanangura semuzere neMweya nesimba raJehovha kuzivisa chivi cheIsraeri, pasina nyaya yakasiyana yakadzama yekudanwa kwake.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        "Condemned corrupt leaders who 'hate the good and love the evil,' comparing their exploitation of the people to butchering meat.",
        'Delivered one of the most quoted summaries of God\'s requirements in the entire Bible: to act justly, love mercy, and walk humbly with God.',
        'Prophesied that a ruler over Israel would come from the small and seemingly insignificant town of Bethlehem, later understood as pointing to Jesus.',
      ],
      sn: [
        "Akashoora vatungamiri vakaora vaya 'vanovenga zvakanaka vachida zvakaipa,' achienzanisa kumanikidza kwavo vanhu nokucheka nyama.",
        'Akapa chimwe chezvinotaurwa zvakanyanya muBhaibheri rose zvezvinodiwa naMwari: kuita zvakarurama, kuda ngoni, uye kufamba nokuzvininipisa naMwari.',
        'Akaporofita kuti mutongi weIsraeri aizobva kudunhu diki uye risinganyanyi kukosha reBhetrehema, gare gare kuchinzwisiswa sekunongedzera kuna Jesu.',
      ],
    },
    bookOverview: {
      en: '7 chapters alternating between harsh judgment and surprising promises of restoration and peace.',
      sn: 'Zvitsauko 7 zvinotevedzana pakati pekutongwa kwakaomarara nevimbiso dzinoshamisa dzekuvandudzwa nerugare.',
    },
    legacy: {
      en: 'His Bethlehem prophecy was directly quoted by religious scholars in the Gospel of Matthew when King Herod asked where the Messiah would be born.',
      sn: 'Uporofita hwake hweBhetrehema hwakadudzwa zvakananga nevadzidzisi verudzidziso muEvhangeri yaMatewu apo Mambo Herodhi akabvunza kuti Mesiya aizoberekerwa kupi.',
    },
    legacyTradition: false,
    reference: 'Micah 3:1-3, Micah 6:8, Micah 5:2, Matthew 2:1-6',
  },
  nahum: {
    background: {
      en: "Identified only as 'the Elkoshite,' with the exact location of Elkosh unknown; almost nothing else is recorded of his personal life.",
      sn: "Anongonzi 'muElikoshi,' nzvimbo chaiyo yeElikoshi isingazivikanwe; hapana zvimwe zvakawanda zvakanyorwa nezvehupenyu hwake hwega.",
    },
    historicalContext: {
      en: "Prophesied roughly a century after Jonah's message of repentance to Nineveh, by which time the city had returned to violence and oppression.",
      sn: 'Akaporofita anenge makore zana mushure meshoko raJona rekutendeuka kuNinevhe, panguva iyoyo guta rakanga radzokera kuutsinye nekumanikidza.',
    },
    calling: {
      en: "Not described; the book opens directly as 'an oracle concerning Nineveh,' with no personal call narrative.",
      sn: "Haina kutsanangurwa; bhuku rinovhurwa richingotanga se'chiratidzo pamusoro peNinevhe,' pasina nyaya yekudanwa kwake ari oga.",
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Opened with a vivid description of God as slow to anger but never leaving the guilty unpunished, setting the tone for the coming judgment.',
        'Described in dramatic, poetic detail the coming siege and sack of Nineveh, including chariots racing through its streets.',
        "Declared that Nineveh's cruelty toward other nations, described as a 'city of blood,' had finally caught up with it.",
      ],
      sn: [
        'Akavhura netsananguro yakadzama yaMwari sanonoka kutsamwa asi asingaregi vane mhosva vasina kurangwa, achigadzira mumwe wenzira yekutongwa kuchauya.',
        'Akatsanangura nemashoko enhetembo akadzama kukombwa nekuparadzwa kwaizouya kweNinevhe, kusanganisira ngoro dzichimhanya mumigwagwa yaro.',
        "Akazivisa kuti utsinye hweNinevhe kune dzimwe ndudzi, hunotsanangurwa se'guta reropa,' hwakazobatwa nazvo.",
      ],
    },
    bookOverview: {
      en: '3 chapters of poetic judgment oracles, considered some of the most vivid battle imagery in the prophetic books.',
      sn: 'Zvitsauko 3 zvemashoko enhetembo ekutongwa, zvinoonekwa sezvimwe zvemifananidzo yehondo inodzama zvikuru mumabhuku euporofita.',
    },
    legacy: {
      en: "Nineveh fell to a coalition of Babylonians and Medes in 612 BC, an event later generations understood as the fulfillment of Nahum's prophecy.",
      sn: 'Ninevhe rakawa kune sangano revaBhabhironi nevaMedhia muna 612 BC, chiitiko chakazonzwisiswa nezera rakatevera sekuzadzikiswa kweuporofita hwaNahumi.',
    },
    legacyTradition: true,
    reference: 'Nahum 1:1-3, Nahum 2:3-13, Nahum 3:1-7',
  },
  habakkuk: {
    background: {
      en: 'Almost nothing is known of his background; unlike most prophets, his book is structured as a personal conversation with God rather than a message to the people.',
      sn: 'Hapana zvakawanda zvinozivikanwa nezvenhoroondo yake; kusiyana nevamwe vaporofita vazhinji, bhuku rake rakagadzirwa sehurukuro yake pachake naMwari panzvimbo peshoko kuvanhu.',
    },
    historicalContext: {
      en: 'Wrote as the Babylonian empire was rising to power, shortly before it would be used by God to judge a corrupt Judah.',
      sn: 'Akanyora umambo hweBhabhironi huchikura mumasimba, nguva shoma husati hwashandiswa naMwari kutonga Judha yakaora.',
    },
    calling: {
      en: 'Not described as a formal call; the book opens with his own complaint to God about violence and injustice going unpunished in Judah.',
      sn: 'Haina kutsanangurwa sekudanwa kwakagadzirwa; bhuku rinovhurwa nekunyunyuta kwake kuna Mwari pamusoro peutsinye nokusaruramisira zvisingarangwe muJudha.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Asked God directly why He tolerated wrongdoing in Judah, and was startled by the answer that Babylon would be the instrument of judgment.',
        'Pushed back a second time, asking how a just God could use a nation more wicked than Judah to punish it.',
        "Stationed himself on a watchtower, determined to wait for God's answer, and received the assurance that 'the righteous shall live by his faith.'",
        'Closed his book with a powerful poem declaring trust in God even if crops fail and flocks are lost.',
      ],
      sn: [
        'Akabvunza Mwari chaizvo kuti sei aitendera kuita kwakaipa muJudha, ndokushamisika nemhinduro yekuti Bhabhironi raizova nhumbi yekutonga.',
        'Akadzokorora kupikisa kechipiri, achibvunza kuti Mwari akarurama aigona sei kushandisa rudzi rwakaipa kupfuura Judha kuriranga.',
        "Akamira pashongwe yekutarisira, akatsunga kumirira mhinduro yaMwari, ndokugamuchira chivimbiso chekuti 'akarurama achararama nokutenda kwake.'",
        'Akapedzisa bhuku rake nenhetembo ine simba inozivisa kuvimba naMwari kunyange zvirimwa zvikakundikana uye makwai achirasika.',
      ],
    },
    bookOverview: {
      en: '3 chapters structured as a dialogue between the prophet and God, ending in a psalm of trust.',
      sn: 'Zvitsauko 3 zvakagadzirwa sehurukuro pakati pomuporofita naMwari, zvichipedzisira nepisarema rokuvimba.',
    },
    legacy: {
      en: "His statement that 'the righteous shall live by faith' was later quoted multiple times in the New Testament and became central to later theological debates about faith.",
      sn: "Mashoko ake ekuti 'akarurama achararama nokutenda' akazodudzwa kakawanda muTestamende Itsva uye akava chinhu chikuru mune nharo dzedzidziso dzegare gare pamusoro pokutenda.",
    },
    legacyTradition: false,
    reference: 'Habakkuk 1:1-4, Habakkuk 1:12-13, Habakkuk 2:1-4, Habakkuk 3',
  },
  zephaniah: {
    background: {
      en: 'His genealogy is traced back four generations to King Hezekiah, making him possibly of royal descent.',
      sn: 'Zvinzvarwa zvake zvinotevedzerwa kusvika kumazera mana kumashure kusvika kuna Mambo Hezekiya, izvo zvinoita kuti pamwe aiva nedzinza roumambo.',
    },
    historicalContext: {
      en: "Ministered during the reign of King Josiah, likely before Josiah's sweeping religious reforms took full effect.",
      sn: 'Akashumira munguva yamambo Josiya, zvichida shanduko dzake huru dzechitendero dzisati dzashanda zvakakwana.',
    },
    calling: {
      en: 'Not described in detail; the book opens by identifying his royal lineage before moving directly into oracles of judgment.',
      sn: 'Haina kutsanangurwa zvakadzama; bhuku rinovhurwa richizivisa dzinza rake roumambo risati raenda zvakananga kumashoko ekutongwa.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Warned that God would sweep away everything from the face of the earth, echoing the language of the flood in Genesis.',
        "Condemned complacent people who said in their hearts, 'The Lord will do nothing, either good or bad.'",
        "Shifted from harsh warning to tender promise, describing God rejoicing over His people 'with singing.'",
      ],
      sn: [
        'Akanyevera kuti Mwari aizobvisa zvose kubva pachiso chenyika, achidzokorora mutauro wemafashame muGenesisi.',
        "Akashoora vanhu vanozvidekha vaiti mumwoyo yavo, 'Jehovha haazoita chinhu, zvakanaka kana zvakaipa.'",
        "Akashandura kubva panyevero yakaomarara kuenda kuvimbiso yorudo, achitsanangura Mwari achifara pamusoro pevanhu vake 'nenziyo.'",
      ],
    },
    bookOverview: {
      en: '3 chapters moving from sweeping judgment on Judah and surrounding nations to a joyful promise of restoration.',
      sn: 'Zvitsauko 3 zvinofamba kubva pakutongwa kukuru kweJudha nendudzi dzakapoteredza kusvika pavimbiso yomufaro yekuvandudzwa.',
    },
    legacy: {
      en: "His phrase 'the Day of the Lord' became one of the most influential concepts in later biblical prophecy and apocalyptic literature.",
      sn: "Mashoko ake ekuti 'Zuva raShe' akava mumwe wepfungwa dzine simba kupfuura muuporofita hwegare gare uye muzvinyorwa zvechiapokariputi.",
    },
    legacyTradition: true,
    reference: 'Zephaniah 1:1-3, Zephaniah 1:12, Zephaniah 3:14-17',
  },
  haggai: {
    background: {
      en: 'One of the first prophets to minister after the Jewish exiles began returning from Babylon; almost nothing is recorded of his personal background.',
      sn: 'Mumwe wevaporofita vekutanga kushumira mushure mekunge vatapwa vechiJudha vatanga kudzoka kubva kuBhabhironi; hapana zvakawanda zvakanyorwa nezvenhoroondo yake yega.',
    },
    historicalContext: {
      en: 'Spoke directly to Zerubbabel the governor and Joshua the high priest, addressing a returned community that had let temple reconstruction stall for over a decade.',
      sn: 'Akataura zvakananga kuna Zerubhabheri mutongi naJoshua mupristi mukuru, achitaura kunharaunda yakadzoka yakanga yarega kuvakazve temberi kwemakore anopfuura gumi.',
    },
    calling: {
      en: 'Not described as a dramatic call; his messages are precisely dated to specific days in the second year of King Darius of Persia.',
      sn: 'Haina kutsanangurwa sekudanwa kunoshamisa; mashoko ake anonyorwa nezuva chairo mugore rechipiri raMambo Dariusi wePezhiya.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        "Confronted the people for living in 'paneled houses' while God's house remained in ruins.",
        'Pointed to poor harvests and general lack of prosperity as a direct consequence of neglecting the temple.',
        "Successfully motivated the people to resume construction within weeks of his first message, and gave assurances that the new temple's glory would exceed the old.",
      ],
      sn: [
        "Akasangana nevanhu nokuda kwekugara mu'dzimba dzakashongedzwa' apo imba yaMwari yaisara ichiparara.",
        'Akaratidza kukohwa kusina kunaka nekushaikwa kwokubudirira sechinhu chinobva zvakananga mukushaya hanya netemberi.',
        'Akabudirira kukurudzira vanhu kudzokera kuvaka mumavhiki mashoma mushure meshoko rake rekutanga, uye akapa chivimbiso chekuti kubwinya kwetemberi itsva kwaizopfuura kweyekare.',
      ],
    },
    bookOverview: {
      en: 'Just 2 short chapters, among the most precisely dated books in the Old Testament.',
      sn: 'Zvitsauko zviviri zvipfupi chete, pakati pemabhuku anonyanya kunyorwa nezuva chairo muTestamende Yekare.',
    },
    legacy: {
      en: 'The temple he encouraged the people to rebuild became known as the Second Temple, which stood, later expanded by Herod, until its destruction in 70 AD.',
      sn: 'Temberi yaakakurudzira vanhu kuvakazve yakazivikanwa seTemberi Yechipiri, yakamira, ichizowedzerwa naHerodhi, kusvika yaparadzwa muna 70 AD.',
    },
    legacyTradition: true,
    reference: 'Haggai 1:1-11, Haggai 2:1-9',
  },
  zechariah: {
    background: {
      en: 'Both a prophet and a priest, apparently from a priestly family, and a contemporary of Haggai working alongside the same returned community.',
      sn: 'Aiva muporofita nemupristi, zvinoita seaibva mumhuri yechipristi, uye hama yenguva imwe chete naHagai vachishanda pamwe nharaunda imwecheteyo yakadzoka.',
    },
    historicalContext: {
      en: 'Ministered during the same rebuilding period as Haggai, encouraging the people alongside the practical push to finish the temple.',
      sn: 'Akashumira munguva imwe chete yekuvaka naHagai, achikurudzira vanhu pamwe nokusundira kwechokwadi kwekupedzisa temberi.',
    },
    calling: {
      en: 'Received a series of eight elaborate night visions early in his ministry, each rich with symbolic figures such as horses, horns, and a flying scroll.',
      sn: 'Akapiwa zviratidzo zvina zvamasikati manomwe zvakadzama pakutanga kweushumiri hwake, chimwe nechimwe chine mifananidzo yakadzama semabhiza, nyanga, uye gwaro rinobhururuka.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Saw a vision of the high priest Joshua standing before God in filthy clothes, which were then symbolically replaced with clean garments.',
        "Prophesied that a future king would come to Jerusalem 'righteous and having salvation, gentle and riding on a donkey.'",
        'Foretold that a betrayed shepherd figure would be valued at exactly thirty pieces of silver, thrown into the temple, and given to a potter.',
        "Prophesied of a coming day when people would look on 'the one they have pierced' and mourn.",
      ],
      sn: [
        'Akaona chiratidzo chomupristi mukuru Joshua amire pamberi paMwari akapfeka nguo dzine tsvina, dzakazotsiviwa nezvinoreva nenguo dzakachena.',
        "Akaporofita kuti mambo weramangwana aizosvika kuJerusarema 'akarurama uye ane ruponeso, akapfava uye akatasva mbongoro.'",
        'Akafanotaura kuti mufananidzo womufudzi akatengeswa aizokoshesa mari yesirivheri makumi matatu chaiwo, akandwa mutemberi, akapiwa kumuumbi wehari.',
        "Akaporofita zuva raizosvika apo vanhu vaizotarisa 'uyo wavakabaya' vachichema.",
      ],
    },
    bookOverview: {
      en: '14 chapters split between the earlier night visions (1-8) and later oracles concerning Jerusalem\'s future and the Messiah (9-14).',
      sn: 'Zvitsauko 14 zvakakamurwa pakati pezviratidzo zvekutanga zvamasikati (1-8) nemashoko ekupedzisira pamusoro peramangwana reJerusarema neMesiya (9-14).',
    },
    legacy: {
      en: "His prophecies of the triumphal entry on a donkey and the thirty pieces of silver were later directly connected by New Testament writers to events in Jesus' final week.",
      sn: 'Mauporofita ake ekupinda nokukunda pambongoro nemari yesirivheri makumi matatu akazobatanidzwa zvakananga nevanyori veTestamende Itsva kuzviitiko zvevhiki rekupedzisira raJesu.',
    },
    legacyTradition: false,
    reference: 'Zechariah 1-6, Zechariah 3:1-5, Zechariah 9:9, Zechariah 11:12-13, Zechariah 12:10',
  },
  malachi: {
    background: {
      en: "His name simply means 'my messenger,' leading some scholars to debate whether it was a personal name or a title; almost nothing else is recorded of him.",
      sn: "Zita rake rinongoreva 'nhume yangu,' izvo zvinoita kuti vamwe vadzidzisi vapokane kuti raiva zita romunhu here kana zita rebasa; hapana zvimwe zvakawanda zvakanyorwa nezvake.",
    },
    historicalContext: {
      en: 'Ministered roughly a century after the exiles\' return, once temple worship had resumed but had grown routine and half-hearted.',
      sn: 'Akashumira anenge zana ramakore mushure mekudzoka kwevatapwa, kunze kwekunge kunamata kwetemberi kwakanga kwatanga zvakare asi kwakanga kwava tsika chete pasina mwoyo.',
    },
    calling: {
      en: 'Not described as a personal call narrative; the book is structured instead as a series of disputes, with God making a statement and the people questioning it.',
      sn: 'Haina kutsanangurwa senyaya yekudanwa kwomunhu ega; bhuku rakagadzirwa panzvimbo pezvo senharo dzakawanda, naMwari achiita mutongo uye vanhu vachibvunza pamusoro pawo.',
    },
    callingTradition: false,
    notableMoments: {
      en: [
        'Confronted priests for offering blind, lame, and diseased animals as sacrifices, calling it an insult to God.',
        'Rebuked the people for robbing God by withholding their full tithes and offerings.',
        'Condemned the practice of divorce among God\'s people, and rebuked marriages to those who did not share their faith.',
        "Promised that God would send a messenger to prepare the way before Him, and that 'Elijah' would come before the great and dreadful Day of the Lord.",
      ],
      sn: [
        'Akasangana nevapristi nokuda kwekupa mhuka dzakapofumara, dzakaremara, uye dzine chirwere sezvibayiro, achidaidza izvi kuti kuzvidza Mwari.',
        'Akatsiura vanhu nokuba Mwari nokusapa zvegumi zvavo nezvipiriso zvizere.',
        'Akashoora tsika yokurambana pakati pevanhu vaMwari, uye akatsiura kuroorana nevasingatendi zvimwe chete nemwi.',
        "Akavimbisa kuti Mwari aizotuma nhume kunogadzira nzira pamberi pake, uye kuti 'Eriya' aizouya pamberi pezuva guru uye rinotyisa raShe.",
      ],
    },
    bookOverview: {
      en: '4 short chapters written in a distinctive question-and-answer style, forming the final book of the Christian Old Testament.',
      sn: 'Zvitsauko 4 zvipfupi zvakanyorwa nenzira yakasiyana yemibvunzo nemhinduro, zvichigadzira bhuku rekupedzisira reTestamende Yekare yechiKristu.',
    },
    legacy: {
      en: "The New Testament identifies John the Baptist as the fulfillment of Malachi's promised messenger who would prepare the way for the Lord.",
      sn: 'Testamende Itsva inoona Johani Mubhabhatidzi sekuzadzikiswa kwenhume yakavimbiswa naMaraki yaizogadzira nzira yaShe.',
    },
    legacyTradition: false,
    reference: 'Malachi 1:6-8, Malachi 3:8-10, Malachi 2:14-16, Malachi 4:5-6, Matthew 11:13-14',
  },
};

export function getProphetDetail(id: string): ProphetDetail | undefined {
  return PROPHET_DETAILS[id];
}
