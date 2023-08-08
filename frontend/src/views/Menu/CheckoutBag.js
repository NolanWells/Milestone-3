import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function CheckoutBag() {
    const items = [
        {
            id: 1,
            name: 'House Salad',
            image: 'https://olo-images-live.imgix.net/05/057463455fe641b39b66bac2dd4d0840.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f02858b1e1bd8f163149ffc4080c82d3',
            price: '6.99',
            cal: '80',
            description: 'Diced tomato, sliced cucumber, shredded Cheddar cheese and croutons on mixed',
        },
        {
            id: 2,
            name: 'Avo-Cobb-O Salad',
            image: 'https://olo-images-live.imgix.net/9e/9efeee6016444d9c97251455b0c3b616.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4337783f273b19b29c317c01cfbfd994',
            price: '14.49',
            cal: '570',
            description: 'Diced tomato, sliced cucumber, shredded Cheddar cheese and croutons on mixed',
        },
        {
            id: 3,
            name: 'House Salad',
            image: 'https://olo-images-live.imgix.net/05/057463455fe641b39b66bac2dd4d0840.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f02858b1e1bd8f163149ffc4080c82d3',
            price: '14.49',
            cal: '840',
            description: 'Chicken tenders, hard-boiled eggs, hardwood-smoked bacon, tomato, croutons',
        },
        {
            id: 4,
            name: 'Simply Grilled Chicken Salad',
            image: 'https://olo-images-live.imgix.net/0b/0b5f34af166e48088f1376f1195c7b92.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4322e13975b523500ad3b2a260e05997',
            price: '13.79',
            cal: '310',
            description: 'This combo of grilled chicken breast, cheddar, tomato, croutons and cucumbers is oh, so simply satisfying. Served on mixed',
        },
        {
            id: 5,
            name: 'Southwest Salad',
            image: 'https://olo-images-live.imgix.net/5b/5bffbe920a114245be9587a94407d641.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=f0a6209bcf27e2e9cf4770d283853a57',
            price: '14.79',
            cal: '790',
            description: 'Ancho-grilled chicken breast, black beans, avocado, fried jalapeño coins, tomato, corn,',
        },
        {
            id: 7,
            name: 'Cheesy Bacon Fondue',
            image: 'https://olo-images-live.imgix.net/e5/e5be276f90af4466bfdf56572801b903.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=23bf6755f6be7dd30ca79e6453806f10',
            price: '16.29',
            cal: '1350',
            description: 'Hardwood-smoked bacon, American cheese and mayo. Served with Cheesy Bacon Fondue for dipping.',
        },
        {
            id: 8,
            name: 'The Southern Charm',
            image: 'https://olo-images-live.imgix.net/e8/e8d3b547b3764a8e87402df95fcd9c54.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=113b2bb7f880270fd2d487ddfe2e28f0',
            price: '14.49',
            cal: '570',
            description: 'Crush on this: hardwood-smoked bacon, Whiskey River® BBQ Sauce, cheddar,',
        },
        {
            id: 9,
            name: 'Whiskey River BBQ',
            image: 'https://olo-images-live.imgix.net/54/54f1e05f7e054e0f8a9a6d482e4cd93c.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=acc8353ca250777208f7843240905dc8',
            price: '14.49',
            cal: '1190',
            description: 'Our signature Whiskey River® BBQ Sauce, crispy onion straws, cheddar, lettuce, tomato and mayo.',
        },
        {
            id: 10,
            name: 'Smoke & Pepper',
            image: 'https://olo-images-live.imgix.net/49/496fbe1439c449a28e3e89e4d79b729e.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=74f164891ed69909e2bd5ee4314487db',
            price: '16.19',
            cal: '820',
            description: 'This combo of black-peppered bacon, cheddar, lettuce, dill pickles and Smoke &',
        },
        {
            id: 11,
            name: 'Royal Red Robin',
            image: 'https://olo-images-live.imgix.net/4a/4a3b8559861f4315afff47cc6bec4cbd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=b4f234d03d97bc21768cbdbc77c307a0',
            price: '15.39',
            cal: '1140',
            description: "It's a classic! Over-easy egg*, hardwood-smoked bacon, American cheese, lettuce,",
        },
        {
            id: 12,
            name: "Burnin' Love Burger",
            image: 'https://olo-images-live.imgix.net/fe/fe57fa5c8758417f8df87eb73ad6a246.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=95f3cb721a450afd73baa3af03f22b17',
            price: '15.49',
            cal: '770',
            description: 'Fried jalapeño coins, house-made salsa, pepper-jack, lettuce, tomato and chipotle aioli.',
        },
        {
            id: 13,
            name: 'Bleu Ribbon',
            image: 'https://olo-images-live.imgix.net/a0/a0326260202d42a5bf69978982ca735b.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=135709d17e16e8dafeff30debff07ee3',
            price: '15.29',
            cal: '1060',
            description: 'Steak sauce, bleu cheese crumbles, crispy onion straws and chipotle aioli for a steakhouse experience. Knives optional.',
        },
        {
            id: 14,
            name: 'Scorpion',
            image: 'https://olo-images-live.imgix.net/ee/ee7936a668dc44409586569a9dd28560.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=88a9dbceb09029e4367445ddc2e1578d',
            price: '16.19',
            cal: '1010',
            description: 'Topped with pepper-jack, crispy jalapeños, Scorpion Pepper Sauce, pickles, onion and',
        },
        {
            id: 15,
            name: 'Banzai',
            image: 'https://olo-images-live.imgix.net/43/4356f0a75c6f4009bcc9f83834d6f1b1.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=17507451811d9b59e6d543a956808994',
            price: '14.49',
            cal: '1000',
            description: 'Take a trip to the tropics. Teriyaki-glazed patty topped with sweet grilled pineapple,',
        },
        {
            id: 16,
            name: 'Bacon Cheeseburger',
            image: 'https://olo-images-live.imgix.net/1d/1d1ab0d9df6c4512be9fcbd781e4d594.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=8f3cbbf4635c1c7bbfff4b275bc78ed7',
            price: '14.99',
            cal: '950',
            description: 'Hardwood-smoked bacon, lettuce, tomato, mayo and your choice of cheese.',
        },
        {
            id: 17,
            name: 'Guacamole Bacon',
            image: 'https://olo-images-live.imgix.net/47/47f69869792a4c70bbceae686c229ec8.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9aee124a2584980238eb8721680a0408',
            price: '15.59',
            cal: '950',
            description: 'House-made guac, hardwood-smoked bacon, Swiss and onion topped with lettuce, tomato and mayo.',
        },
        {
            id: 18,
            name: 'Red Robin Gourmet Cheeseburger',
            image: 'https://olo-images-live.imgix.net/ab/ab00c226b523413fada55a3cefacc2cd.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c897fa3615227a872720ae0a2a069498',
            price: '14.49',
            cal: '570',
            description: 'Pickle relish, onion, pickles, lettuce, tomato, mayo and your choice of cheese.',
        },
        {
            id: 19,
            name: "Sauteed 'Shroom",
            image: 'https://olo-images-live.imgix.net/f4/f493bb3637474e949b7e7d4f13d11fdb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9ff2358a840a57a19177622c5d084dac',
            price: '14.59',
            cal: '900',
            description: 'A mound of fresh, sautéed garlic mushrooms, covered with melty Swiss.',
        },
        {
            id: 20,
            name: 'Monster',
            image: 'https://olo-images-live.imgix.net/47/4725add28eee43f3bda812e6f17ac364.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9f0d07c2bce80c98ca30f6c06e28f5ae',
            price: '16.99',
            cal: '1140',
            description: "What's better than one juicy patty? Two! Grilled with your choice of cheese, onion,",
        },
        {
            id: 21,
            name: 'Keep it Simple',
            image: 'https://olo-images-live.imgix.net/71/717c1a3d69ff4d489437e711331b3108.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=d2ec1101d71ff1da1ab890cf5ec7ec39',
            price: '13.59',
            cal: '380',
            description: 'Keep it simple (simply delicious, that is) with a naked beef, chicken or ancient-grain veggie patty served with onion, lettuce and tomato.',
        },
        {
            id: 22,
            name: 'Get Saucy!',
            image: 'https://olo-images-live.imgix.net/d4/d4ae8edade03414c8c2088e8baddee28.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=fb2c38e381de3488d3240a4f847eed19',
            price: '.99',
            cal: '50',
            description: 'Our sauce secret is out! Creamy Ranch Dressing and coveted Campfire Mayo are',
        },
        {
            id: 23,
            name: 'Steak Fries',
            image: 'https://olo-images-live.imgix.net/21/21e0edf56c1544f287a0cddf82e1f420.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c8e04afb6a1298977c3fa5c8fe44de35',
            price: '1.99',
            cal: '350',
            description: "Thick cut and fried to perfection with Red's Original seasoning.",
        },
        {
            id: 24,
            name: 'Sweet Potato Fries',
            image: 'https://olo-images-live.imgix.net/4b/4bbab81a004648ba8ef0fed7f8e48cbf.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c21376e0322521db1855c0830dadf595',
            price: '1.99',
            cal: '460',
            description: 'Thin cut sweet potatoes fried to perfection with a dash of salt.',
        },
        {
            id: 25,
            name: 'Garlic Fries',
            image: 'https://olo-images-live.imgix.net/cf/cf8ce00e14e94a35894885bfc23bd0e2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=491574624bb92c1e5789dca3d3cd7659',
            price: '1.99',
            cal: '430',
            description: 'Thick cut and fried to perfection with garlic Parmesan butter and Parmesan cheese.',
        },
        {
            id: 26,
            name: 'Yukon Chips',
            image: 'https://olo-images-live.imgix.net/2e/2ed64b67412f438c9c603b8885c4e86c.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=7fc953627c7bbda90766575d056a6e2c',
            price: '1.99',
            cal: '500',
            description: 'Perfectly seasoned with Red Robin® Seasoning.',
        },
        {
            id: 27,
            name: 'Steamed Broccoli',
            image: 'https://olo-images-live.imgix.net/c0/c0dc67397d094a8991cea5991a594267.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=c38b60c048fa7c55df6c24c5e36794a6',
            price: '1.99',
            cal: '30',
            description: 'Fresh broccoli, steamed to perfection.',
        },
        {
            id: 28,
            name: 'NEW! Peaches & Cream Milshake',
            image: 'https://olo-images-live.imgix.net/8b/8b147d1064ea4111abbf953e50ae2e22.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=ed9b6cd84041dbc3f5d6e5877a6ec349',
            price: '6.99',
            cal: '1210',
            description: 'Creamy vanilla soft serve blended with milk, diced peaches and peach puree. Topped with',
        },
        {
            id: 29,
            name: 'Freckled Lemonade Cake',
            image: 'https://olo-images-live.imgix.net/42/426f1e2813ea460b90c6bcb0ff5e7433.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=9756efce155c480115f27250ff9805c5',
            price: '8.99',
            cal: '1060',
            description: 'Light and refreshing lemon cake layered with lemon mousse and white chocolate bits, topped with lemon curd and strawberry',
        },
        {
            id: 30,
            name: 'Mountain Gigh Mudd Pie',
            image: 'https://olo-images-live.imgix.net/f6/f697d1f57d8f41908446cba7b2353242.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=5201c1c0d12df562773768b994584c3e',
            price: '8.99',
            cal: '1340',
            description: 'A mountain of chocolate and vanilla ice cream, layered with OREO® cookies, fudge,',
        },
        {
            id: 31,
            name: 'Fudge-Filled Chocolate Chip Cookies',
            image: 'https://olo-images-live.imgix.net/2d/2d1a3107546f4656a58d7b0de9a88c62.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=abdce5662c05627cccaa1344163ebde1',
            price: '1.99',
            cal: '330',
            description: 'One or five of our chocolate chip cookies that feature a soft, fudge-filled center that',
        },
        {
            id: 32,
            name: 'Cinnamon Sugar Doh! Ring Shorty',
            image: 'https://olo-images-live.imgix.net/82/82c0bd0c2fea41a2a9a9e858762de45e.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=101069c04b71061435f2482497abba3e',
            price: '8.69',
            cal: '770',
            description: 'Four cinnamon and sugar croissant donut rings served with caramel and fudge.',
        },
        {
            id: 33,
            name: 'Cinnamon Sugar Towering Doh! Rings',
            image: 'https://olo-images-live.imgix.net/6a/6a30e9832064456c9b478b5f88b618ec.png?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=4e4f4527209b7a947765c23cad09c97f',
            price: '10.69',
            cal: '1550',
            description: 'Eight cinnamon and sugar croissant donut rings served with caramel and fudge.',
        },
        {
            id: 34,
            name: 'Chocolate Milkshake',
            image: 'https://olo-images-live.imgix.net/fd/fdbfa96cc52b458a84895c39c01c5a43.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=1d2111156dfbe0ff5f1b419b0394dac8',
            price: '6.49',
            cal: '1020',
            description: 'Creamy soft-serve blended with milk and chocolate syrup. Garnished with whipped',
        },
        {
            id: 35,
            name: 'Stawberry Milkshake',
            image: 'https://olo-images-live.imgix.net/5b/5b92933d55c64481999b3d12d68f70c2.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=82994045103910336e80dd57f949c6af',
            price: '6.49',
            cal: '930',
            description: 'Creamy soft-serve blended with milk and strawberry. Garnished with whipped cream',
        },
        {
            id: 36,
            name: 'Vanilla Milkshake',
            image: 'https://olo-images-live.imgix.net/70/7053084641cf4f9fa079a6d1dbf81a32.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=1725&h=975&fit=fill&fm=png32&bg=transparent&s=0ec514e95988dcca182698d1a9bf42b9',
            price: '6.49',
            cal: '940',
            description: 'Creamy soft-serve blended with milk and vanilla syrup. Garnished with whipped cream',
        }
    ];

    const handleCheckout = () => {
        // Perform checkout logic here
        alert("Thank you for your purchase!");
        // You can redirect the user to a payment gateway or further processing.
        // For the sake of this barebones example, we'll simply display an alert message.
    };

    const bag = localStorage.getItem('bag')

    return (
        <Container>
            <h1>Checkout Bag</h1>
            
            <div>{ bag }</div>

            <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
        </Container>
    );
}

