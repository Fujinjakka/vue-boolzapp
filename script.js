var app = new Vue(
  {
  el: "#vue_container",
    data: {
      contacts: [
      	{
      		name: 'Ironman',
      		avatar: 'img/ironman.png',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Un genio....miliardario, playboy, filantropo!',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Dottor Banner! Questo sarebbe un buon momento per arrabbiarsi!',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Ti svelo un segreto: io sono sempre arrabbiato!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Spiderman',
      		avatar: 'img/spiderman.jpg',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Deve esserci qualcun altro da chiamare... Per esempio Thor?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Fuori portata.',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Ok ci penso io!',
      				status: 'sent'
      			}
      		],
      	},
      	{
      		name: 'Hulk',
      		avatar: 'img/hulk.png',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'Dottor Banner! Questo sarebbe un buon momento per arrabbiarsi!',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Ti svelo un segreto: io sono sempre arrabbiato!',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Captain America',
      		avatar: 'img/captainamerica.png',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Sei grosso con l armatura, ma senza quella, che cosa sei?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Un genio....miliardario, playboy, filantropo!',
      				status: 'received'
      			}
      		],
      	}
      ],
      selectedIndex: 0
    },
    methods: {
      selectedContact: function(newIndex) {
        this.selectedIndex = newIndex;
      }
    }
  }
);
