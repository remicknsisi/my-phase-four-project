import React, { useState, useContext } from "react";
import { StudentContext } from "../context/StudentProvider.js";

function Letter () {
    const { currentUser } = useContext(StudentContext)
    const [isPageOne, setIsPageOne] = useState(true)

    if (!isPageOne){
        return (
            <div className="letter">
                <h1>HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY</h1>
                <p>
                UNIFORM
                <br/>
                First-year students will require:
                <br/>
                1. Three sets of plain work robes (black)
                <br/>
                2. One plain pointed hat (black) for day wear
                <br/>
                3. One pair of protective gloves (dragon hide or similar)
                <br/>
                4. One winter cloak (black, with silver fastenings)
                <br/>
                Please note that all pupil's clothes should carry name tags.
                <br/>
                COURSE BOOKS
                <br/>
                All students should have a copy of each of the following:
                <br/>
                The Standard Book of Spells (Grade 1)
                <br/>
                by Miranda Goshawk
                <br/>
                A History of Magic
                <br/>
                by Bathilda Bagshot
                <br/>
                Magical Theory
                <br/>
                by Adalbert Waffling
                <br/>
                A Beginner's Guide to Transfiguration
                <br/>
                by Emeric Switch
                <br/>
                One Thousand Magical Herbs and Fungi
                <br/>
                by Phyllida Spore
                <br/>
                Magical Drafts and Potions
                <br/>
                by Arsenius Jigger
                <br/>
                Fantastic Beasts and Where to Find Them
                <br/>
                by Newt Scamander
                <br/>
                The Dark Forces: A Guide to Self-Protection
                <br/>
                by Quentin Trimble
                <br/>
                OTHER EQUIPMENT
                <br/>
                1 wand
                <br/>
                1 cauldron (pewter, standard size 2)
                <br/>
                1 set glass or crystal phials
                <br/>
                1 telescope
                <br/>
                1 set brass scales
                <br/>
                Students may also bring, if they desire, an owl OR a cat OR a toad.
                <br/>
                PARENTS ARE REMINDED THAT FIRST YEARS
                <br/>
                ARE NOT ALLOWED THEIR OWN BROOMSTICK
                <br/>
                Yours sincerely,
                <br/>
                Lucinda Thomsonicle-Pocus image of sig
                <br/>
                Lucinda Thomsonicle-Pocus
                <br/>
                Chief Attendant of Witchcraft Provisions
                </p>
                <button onClick={() => setIsPageOne(true)}>See Page 1</button>
            </div>
        )
    } else {
        return (
            <div className="letter">
                <h1>HOGWARTS SCHOOL of WITCHCRAFT and WIZARDRY</h1>
                <p>
                Dear {currentUser.name},
                <br/>
                We are pleased to inform you that you have been accepted at Hogwarts School of Witchcraft and Wizardry. Please find enclosed a list of all necessary books and equipment.
                Term begins on 1 September. We await your owl by no later than 31 July.
                <br/>
                Yours sincerely,
                <br/>
                <img src="https://i.pinimg.com/originals/99/4e/dc/994edc0f01e489fc25a4f112b22793cc.png"/>
                <br/>
                Minerva McGonagall
                <br/>
                Deputy Headmistress
                </p>
                <button onClick={() => setIsPageOne(false)}>See Page 2</button>
            </div>
        )
    }
}

export default Letter;