import { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions, Image } from 'react-native';
import ApiInstance from '../../services/api';

const Slider = () => {
    const [sliderList, setSliderList] = useState([]);

    useEffect(() => {
        getSlider();
    }, []);

    const getSlider = () => {
        ApiInstance.getSlider().then((response) => setSliderList(response.data));
    };

    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={sliderList}
                renderItem={({ item }) => (
                    <Image
                        source={{ uri: item.attributes.ImageUrl.data.attributes.url }}
                        style={{
                            width: Dimensions.get('screen').width * 0.9,
                            height: 170,
                            borderRadius: 10,
                            margin: 4,
                        }}
                    />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default Slider;
