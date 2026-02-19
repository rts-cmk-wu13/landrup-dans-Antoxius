import Image from "next/image";

export default function Holdetyper () {

return (
    <div className="mx-5 text-white rounded-lg">
        <h1 className="text-4xl font-bold my-8">Vores holdetyper</h1>
        <div className="flex gap-2 mb-10 flex-col">
            <h2 className="text-2xl mb-1">Børnehold</h2>
            <Image src="/assets/boernedans.jpg" alt="Børnehold" width={600} height={400} className="relative"/>
            <p>På børneholdene leger vi os ind i dansens verden gennem musik, bevægelse og fantasi. Undervisningen styrker motorik, rytme og kropsbevidsthed i trygge rammer. Fokus er på danseglæde, fællesskab og aktiv bevægelse, hvor alle kan være med.</p>
        </div>
        <div className="flex gap-2 mb-10 flex-col">
            <h2 className="text-2xl mb-3">Selskabs- og seniordans</h2>
            <Image src="/assets/seniordans.jpg" alt="Selskabs- og seniordans" width={600} height={400} className="relative"/>
            <p>Selskabs- og seniordans kombinerer hyggeligt samvær med skånsom motion. Vi danser klassiske pardanse i et tempo, hvor alle kan følge med. Undervisningen styrker balance, koordination og kondition, samtidig med at fællesskabet og danseglæden er i centrum.</p>
        </div>
        <div className="flex gap-2 mb-10 flex-col">
            <h2 className="text-2xl mb-3">Moderne dans og ballet</h2>
            <Image src="/assets/modernedans.jpg" alt="Moderne dans og ballet" width={600} height={400} className="relative"/>
            <p>Moderne dans og ballet forener teknik, kropskontrol og musikalsk udtryk. Træningen forbedrer styrke, smidighed og holdning gennem varierede øvelser. Undervisningen foregår i en positiv atmosfære, hvor bevægelsesglæde og koncentration skaber både fordybelse og effektiv motion.</p>
        </div>
        <div className="flex gap-2 mb-10 flex-col">
            <h2 className="text-2xl mb-3">Streedance og hiphop</h2>
            <Image src="/assets/streethiphop.jpg" alt="Streedance og hiphop" width={600} height={400} className="relative"/>
            <p>Streetdance og hiphop er energifyldt træning med fokus på rytme, attitude og fællesskab. Vi arbejder med grooves, koreografier og grundtrin, der styrker kondition og koordination. Stemningen er uformel og motiverende, så motion og danseglæde går hånd i hånd.</p>
        </div>
    </div>
)
}