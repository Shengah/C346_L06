import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, ToastAndroid, Image, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Define own Question component with appropriate parameters and display
const QuizQuestion = ({question, uri, option1, option2, option3, quest}) => {
    return (
        <View style={{marginTop: 10, marginBottom: 10}}>
            <Picker onValueChange={(value) => quest (value)}>
                <Picker.Item label={option1} value={option1}/>
                <Picker.Item label={option2} value={option2}/>
                <Picker.Item label={option3} value={option3}/>
            </Picker>
            <Image source={{uri : uri}} style={{width: 400, height: 200}}/>
            <Text>{question}</Text>
        </View>
    );
};

const QuizApp = () => {
    const [q1, question1] = useState("First Person Shooter");
    const [q2, question2] = useState("First Person Shooter");
    const [q3, question3] = useState("First Person Shooter");

    return (
        <ScrollView style={{marginTop: 40, marginBottom: 50}}>
            <Text>What is the game's genre</Text>

            {/*<Picker onValueChange={(value) => question1(value)}>*/}
            {/*    <Picker.Item label='First Person Shooter' value='First Person Shooter'/>*/}
            {/*    <Picker.Item label='Massively multiplayer online role-playing game' value='Massively multiplayer online role-playing game'/>*/}
            {/*    <Picker.Item label='Battle Royale' value='Battle Royale'/>*/}
            {/*</Picker>*/}

            <QuizQuestion
                quest = {question1}
                option1 = 'First Person Shooter'
                option2 = 'Massively multiplayer online role-playing game'
                option3 = 'Battle Royale'
                uri = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZrwFf1vh0eXu1xtrIdSyG8uFcFmspN3jYQ&s"}
                question='What is the genre?'
            />

            {/*<Picker onValueChange={(value) => question2(value)}>*/}
            {/*    <Picker.Item label='First Person Shooter' value='First Person Shooter'/>*/}
            {/*    <Picker.Item label='Massively multiplayer online role-playing game' value='Massively multiplayer online role-playing game'/>*/}
            {/*    <Picker.Item label='Battle Royale' value='Battle Royale'/>*/}
            {/*</Picker>*/}

            <QuizQuestion
                quest = {question2}
                option1 = 'First Person Shooter'
                option2 = 'Massively multiplayer online role-playing game'
                option3 = 'Battle Royale'
                uri = {"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg?t=1749053861"}
                question='What is the genre?'
            />

            {/*<Picker onValueChange={(value) => question3(value)}>*/}
            {/*    <Picker.Item label='First Person Shooter' value='First Person Shooter'/>*/}
            {/*    <Picker.Item label='Massively multiplayer online role-playing game' value='Massively multiplayer online role-playing game'/>*/}
            {/*    <Picker.Item label='Battle Royale' value='Battle Royale'/>*/}
            {/*</Picker>*/}

            <QuizQuestion
                quest = {question3}
                option1 = 'First Person Shooter'
                option2 = 'Massively multiplayer online role-playing game'
                option3 = 'Battle Royale'
                uri = {"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7GaBDBkRxx9fwc_53ifEOVAdsIb6vRRUfw&s"}
                question='What is the genre?'
            />


            <TouchableOpacity
                style={{
                    margin: 5, backgroundColor: 'deepskyblue', height: 50, borderRadius: 5,
                    justifyContent: 'center', alignItems: 'center'
                }}
                onPress={() => {
                    const correct1 = 'Massively multiplayer online role-playing game';
                    const correct2 = 'First Person Shooter';
                    const correct3 = 'Battle Royale';
                    let score = 0
                    if (q1 === correct1) score+=1;
                    if (q2 === correct2) score+=1;
                    if (q3 === correct3) score+=1;

                    let message = `You got ${score} out of 3 correct!`;

                    if (score === 3) {
                        message = "Perfect! " + "Current Score: " + score ;
                    } else if (score === 2) {
                        message = "Almost there! " + "Current Score: " + score ;
                    } else if (score === 1) {
                        message = "Keep trying! " + "Current Score: " + score ;
                    } else {
                        message = "All Wrong";
                    }

                    Alert.alert(message)}} >

                <Text style={{fontSize: 20}}>SUBMIT ANSWERS</Text>
            </TouchableOpacity>


        </ScrollView>
    );
};

export default QuizApp;

