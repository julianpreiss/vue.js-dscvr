Vue.component('bienvenida-usuario', {
    data: function () {
       return {
         nombre: "user",
         texto:"Bienvenide",
		 generomusical:""
   
         }
     },
       template:`<div>
	   				<label>Cómo es tu nombre, queride fan de la música</label>
					<form v-on:submit.prevent>
					<input type ="text" v-model="nombre"/>
					<label>Cuál es tu genero musical favorito?</label>
					<input type ="text" v-model="generomusical" @keyup.13="agregar"/>
					</form>
                    <p>{{texto}} : {{ nombre }}, fan de la música {{generomusical}}</p>

                </div>`
    })

	Vue.component('logo-header', {
		data: function () {
		   return {
			 nombre: "DSCVER",   
			 }
		 },
		   template:`    <div class="container" id="home">
							<div class="col-12 text-center">
								<div class="tm-page-header">
								<i class="fas fa-4x fa-chart-bar mr-4"></i>
								<h1 class="d-inline-block text-uppercase">{{nombre}}</h1>
								</div>
							</div>
						</div>`
		})




var app= new Vue({
	el: "#contenedor",
	data: {
		total:0,
		verificar:true,
			jazz:[
				{nombre: "Jacob Collier", actividad: "2011 - actualidad", portada:"img/jacobcollier.jpg", alt:"Jacob tocando el piano",
				canciones:[ 
					{cancion:"Human Nature", cancionlink: "https://www.youtube.com/watch?v=kIjExHdnx2E&ab_channel=QuincyJones"},
					{cancion: "Hideaway", cancionlink: "https://www.youtube.com/watch?v=4v3zyPEy-Po&ab_channel=JacobCollier"},
                    {cancion: "You and I", cancionlink: "https://www.youtube.com/watch?v=cAoqM6YICMM&ab_channel=TavisSmiley"},                   
					]
				},

                {nombre: "Esperanza Spalding", actividad: "2011 - actualidad", portada:"img/esperanzaspalding.jpg", alt:"Esperanza tocando el contrabajo",
				canciones:[ 
					{cancion:" On The Sunny Side Of The Street", cancionlink: "https://www.youtube.com/watch?v=kIjExHdnx2E&ab_channel=QuincyJones"},
					{cancion: "The Blues (With Robert Glasper)", cancionlink: "https://www.youtube.com/watch?v=p6ORkLQkaSk&ab_channel=RobertGlasper"},
                    {cancion: "Tiny Desk Concert", cancionlink: "https://www.youtube.com/watch?v=sBZa7-2bG2I&ab_channel=muzlinemuzline"},                   
					]
				},

                {nombre: "Snarky Puppies", actividad: "2011 - actualidad", portada:"img/esperanzaspalding.jpg", alt:"Esperanza tocando el contrabajo",
				canciones:[ 
					{cancion:"Lingus (We Like It Here)", cancionlink: "https://www.youtube.com/watch?v=L_XJ_s5IsQc&ab_channel=GroundUPMusicNYC"},
					{cancion: "Bad Kids to The Back", cancionlink: "https://www.youtube.com/watch?v=fEHpq-BxFm4&ab_channel=GroundUPMusicNYC"},
                    {cancion: "Tio Macaco", cancionlink: "https://www.youtube.com/watch?v=y0bcTSDFScg&ab_channel=GroundUPMusicNYC"},                   
					]
				},

			],

            funk:[
				{nombre: "Vulfpeck", actividad: "2011 - actualidad", portada:"img/jacobcollier.jpg", alt:"Jacob tocando el piano",
				canciones:[ 
					{cancion:"1612", cancionlink: "https://www.youtube.com/watch?v=jRHQPG1xd9o&ab_channel=GroundUPMusicNYCGroundUPMusicNYC"},
					{cancion: "Cory Wong", cancionlink: "https://www.youtube.com/watch?v=AWBUnr0F3Zo"},
                    {cancion: "Dean Town", cancionlink: "https://www.youtube.com/watch?v=le0BLAEO93g&ab_channel=Vulf"},                   
					]
				},

                {nombre: "Scary Pockets", actividad: "2011 - actualidad", portada:"img/esperanzaspalding.jpg", alt:"Esperanza tocando el contrabajo",
				canciones:[ 
					{cancion:"I Want It That Way", cancionlink: "https://www.youtube.com/watch?v=VZAJMBFq85s&ab_channel=ScaryPockets"},
					{cancion: "Wonderwall", cancionlink: "https://www.youtube.com/watch?v=jftpg_6SUYk&ab_channel=ScaryPockets"},
                    {cancion: "Hey Jude", cancionlink: "https://www.youtube.com/watch?v=HSSO_mqPBCI&ab_channel=ScaryPockets"},                   
					]
				},

                {nombre: "Lettuce", actividad: "2011 - actualidad", portada:"img/esperanzaspalding.jpg", alt:"Esperanza tocando el contrabajo",
				canciones:[ 
					{cancion:"Phyllis", cancionlink: "https://www.youtube.com/watch?v=iZaPW_L21WU&ab_channel=WorldCafe"},
					{cancion: "The Force", cancionlink: "https://www.youtube.com/watch?v=EbAHpA-H17w&ab_channel=Lettuce"},
                    {cancion: "Royal Higness", cancionlink: "https://www.youtube.com/watch?v=AG3K6cgNKtg&ab_channel=Lettuce"},                   
					]
				},

			],

            rock:[
				{nombre: "Parcels", actividad: "2014 - actualidad", portada:"img/jacobcollier.jpg", alt:"Jacob tocando el piano",
				canciones:[ 
					{cancion:"Overnight", cancionlink: "https://www.youtube.com/watch?v=BTdBc2Ba8ts"},
					{cancion: "Gamesofluck", cancionlink: "https://www.youtube.com/watch?v=O8mqObs7gv0&ab_channel=ParcelsParcelsCanaloficialdelartista"},
                    {cancion: "Lightenup", cancionlink: "https://www.youtube.com/watch?v=JQz5l55qtsY&ab_channel=ParcelsParcelsCanaloficialdelartista"},                   
					]
				},

                {nombre: "Sam Fender", actividad: "2011 - actualidad", portada:"img/esperanzaspalding.jpg", alt:"Esperanza tocando el contrabajo",
				canciones:[ 
					{cancion:"Will We Talk?", cancionlink: "https://www.youtube.com/watch?v=b_0oCxfL9cM&ab_channel=SamFenderSamFenderCanaloficialdelartista"},
					{cancion: "Hypersonic Missiles", cancionlink: "https://www.youtube.com/watch?v=CDsFKOrLWhU&ab_channel=SamFenderSamFenderCanaloficialdelartista"},
                    {cancion: "The Borders", cancionlink: "https://www.youtube.com/watch?v=j2EKkWl7K1A&ab_channel=SamFenderSamFenderCanaloficialdelartista"},                   
					]
				},

                {nombre: "Foo Fighters", actividad: "1994 - actualidad", portada:"img/esperanzaspalding.jpg", alt:"Esperanza tocando el contrabajo",
				canciones:[ 
					{cancion:"The Pretender", cancionlink: "https://www.youtube.com/watch?v=SBjQ9tuuTJQ&ab_channel=FooFightersFooFightersVerificada"},
					{cancion: "Learn To Fly", cancionlink: "https://www.youtube.com/watch?v=1VQ_3sBZEm0&ab_channel=FooFightersFooFightersCanaloficialdelartista"},
                    {cancion: "Big Me", cancionlink: "https://www.youtube.com/watch?v=pLdJQFTnZfA&ab_channel=FooFightersFooFightersCanaloficialdelartista"},                   
					]
				},

			],
			
		},
		//cierre data
		methods:{
			agregar:function(){
				if(this.mensaje ==""){
					this.verificar = false
				}else{
					this.verificar = true
				this.lista.push({
					mensaje: this.mensaje,
					css: 'pendientes'
				});
				this.mensaje="";
				this.total= this.lista.length;
				}
			},
			borrar:function(index){
				if(this.lista[index].css == 'terminadas'){
					this.sumarTerminadas --;
				}
				this.lista.splice(index,1)
				this.total --;
			},
		}

})


Vue.component('tab-recomendacion1', { 
	data: function () {
		return {
		  genero: "K-pop",
		  artista:"BTS",
	
		  }
	  },
	template: '<div>Nuestra recomendación de hoy en el género {{genero}}, es {{artista}}</div>' 
})
Vue.component('tab-recomendacion2', { 
	data: function () {
		return {
		  genero: "Rock Clásico",
		  artista:"King Crimson",
	
		  }
	  },
	template: '<div>Nuestra recomendación de hoy en el género {{genero}}, es {{artista}}</div>' 
})
Vue.component('tab-recomendacion3', { 
	data: function () {
		return {
		  genero: "Pop",
		  artista:"Logic",	
		  }
	  },
	template: '<div>Nuestra recomendación de hoy en el género {{genero}}, es {{artista}}</div>' 
})

new Vue({
  el: '#dynamic-component-demo',
  data: {
	currentTab: 'Recomendacion1',
	tabs: ['Recomendacion1', 'Recomendacion2', 'Recomendacion3']
  },
  computed: {
	currentTabComponent: function () {
	  return 'tab-' + this.currentTab.toLowerCase()
	}
  }
})




