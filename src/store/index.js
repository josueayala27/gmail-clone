import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'indigo',
    social: [
      {id: 1, selected: false, starred: false, read: true, saved: false, user: 'Josué Ayala', message: 'Similique rerum amet, deserunt facere sapiente rem unde, nisi natus adipisci, qui maiores porro itaque. Dolor ratione, eaque iusto nisi eos voluptate.'},
      {id: 2, selected: false, starred: false, read: false, saved: false, user: 'Adam Wathan', message: 'Esse nisi eveniet, impedit dicta dolore illo eligendi quo quae amet voluptatum, id nostrum corrupti libero, officiis sed aspernatur deleniti vero mollitia!.'},
      {id: 3, selected: false, starred: false, read: true, saved: false, user: 'Simon Vrachliotis', message: 'Veniam possimus voluptatem illo tempora ea, delectus, temporibus eligendi voluptatum pariatur commodi dicta molestiae cum praesentium quidem corrupti in et? Voluptas, ipsum?'},
    ],
    inbox: [
      {id: 1, selected: false, starred: false, read: true, saved: false, user: 'Josué Ayala', message: 'Similique rerum amet, deserunt facere sapiente rem unde, nisi natus adipisci, qui maiores porro itaque. Dolor ratione, eaque iusto nisi eos voluptate.'},
      {id: 2, selected: false, starred: false, read: false, saved: false, user: 'Adam Wathan', message: 'Esse nisi eveniet, impedit dicta dolore illo eligendi quo quae amet voluptatum, id nostrum corrupti libero, officiis sed aspernatur deleniti vero mollitia!.'},
      {id: 3, selected: false, starred: false, read: true, saved: false, user: 'Simon Vrachliotis', message: 'Veniam possimus voluptatem illo tempora ea, delectus, temporibus eligendi voluptatum pariatur commodi dicta molestiae cum praesentium quidem corrupti in et? Voluptas, ipsum?'},
      {id: 3, selected: false, starred: false, read: false, saved: false, user: 'Lee Robinson', message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
      {id: 3, selected: false, starred: false, read: false, saved: false, user: 'Steve Schoger', message: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from'},
    ],
    promotions: [
      {id: 1, selected: false, starred: false, read: true, saved: false, user: 'Josué Ayala', message: 'Similique rerum amet, deserunt facere sapiente rem unde, nisi natus adipisci, qui maiores porro itaque. Dolor ratione, eaque iusto nisi eos voluptate.'},
      {id: 2, selected: false, starred: false, read: false, saved: false, user: 'Jed Watson', message: 'Esse nisi eveniet, impedit dicta dolore illo eligendi quo quae amet voluptatum, id nostrum corrupti libero, officiis sed aspernatur deleniti vero mollitia!.'},
      {id: 3, selected: false, starred: false, read: true, saved: false, user: 'Yuri Sulyma', message: 'Veniam possimus voluptatem illo tempora ea, delectus, temporibus eligendi voluptatum pariatur commodi dicta molestiae cum praesentium quidem corrupti in et? Voluptas, ipsum?'},
      {id: 3, selected: false, starred: false, read: true, saved: false, user: 'Asheesh Kapur', message: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage"},
      {id: 3, selected: false, starred: false, read: false, saved: false, user: 'Joe Moeller', message: "need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary"},
      {id: 3, selected: false, starred: false, read: false, saved: false, user: 'David Jaz Myers', message: "first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable"},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
