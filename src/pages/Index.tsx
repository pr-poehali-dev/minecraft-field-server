import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [copiedIP, setCopiedIP] = useState(false);
  const serverIP = 'fildcube.proxycraft.ru';

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopiedIP(true);
    toast({
      title: 'IP скопирован!',
      description: 'Адрес сервера скопирован в буфер обмена',
    });
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const leaderboardData = [
    { rank: 1, name: 'Steve_Pro', online: '342ч', achievements: 156, level: 89 },
    { rank: 2, name: 'Creeper_King', online: '298ч', achievements: 134, level: 82 },
    { rank: 3, name: 'Diamond_Miner', online: '276ч', achievements: 128, level: 78 },
    { rank: 4, name: 'Enderman_Boy', online: '251ч', achievements: 115, level: 74 },
    { rank: 5, name: 'Notch_Master', online: '234ч', achievements: 109, level: 71 },
    { rank: 6, name: 'Alex_PvP', online: '218ч', achievements: 98, level: 68 },
    { rank: 7, name: 'Zombie_Hunter', online: '205ч', achievements: 92, level: 65 },
    { rank: 8, name: 'Builder_Pro', online: '189ч', achievements: 87, level: 62 },
  ];

  const donatePackages = [
    {
      name: 'VIP',
      price: '199₽',
      color: 'from-primary to-primary/70',
      features: ['Уникальный префикс', 'Доступ к /fly', '5 домов', 'Приватные варпы'],
    },
    {
      name: 'PREMIUM',
      price: '399₽',
      color: 'from-secondary to-secondary/70',
      features: ['Все из VIP', 'Креативный режим', '10 домов', 'Цветной ник', 'Кит каждые 12ч'],
    },
    {
      name: 'LEGEND',
      price: '799₽',
      color: 'from-accent to-accent/70',
      features: ['Все из PREMIUM', 'Эффекты частиц', '20 домов', 'Безлимит /back', 'Эксклюзивные киты'],
    },
  ];

  const commands = [
    { cmd: '/home', desc: 'Телепортация домой' },
    { cmd: '/sethome [название]', desc: 'Установить точку дома' },
    { cmd: '/warp [название]', desc: 'Телепорт на варп' },
    { cmd: '/tpa [игрок]', desc: 'Запрос телепортации к игроку' },
    { cmd: '/bal', desc: 'Проверить баланс' },
    { cmd: '/shop', desc: 'Открыть магазин' },
  ];

  const rules = [
    'Запрещено использование читов и модов, дающих преимущество',
    'Запрещен гриф (разрушение чужих построек)',
    'Уважительное общение с игроками и администрацией',
    'Запрещены оскорбления, мат и спам в чате',
    'Запрещена реклама других серверов',
    'Использование багов и дюпов карается баном',
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-primary/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl">🟩</div>
            <h1 className="text-2xl font-bold text-glow-green text-primary">FildCube</h1>
          </div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О сервере</a>
            <a href="#rules" className="hover:text-secondary transition-colors">Правила</a>
            <a href="#donate" className="hover:text-accent transition-colors">Донат</a>
            <a href="#leaderboard" className="hover:text-primary transition-colors">Лидеры</a>
            <a href="#commands" className="hover:text-secondary transition-colors">Команды</a>
            <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float inline-block mb-6">
            <div className="text-9xl">⛏️</div>
          </div>
          <h1 className="text-6xl font-bold mb-4 text-glow-green">
            Добро пожаловать на <span className="text-primary">FildCube</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Лучший Minecraft сервер с уникальными режимами и дружным комьюнити
          </p>
          
          <Card className="inline-block p-6 glow-green border-primary/50 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">IP сервера:</p>
                <p className="text-2xl font-bold text-primary font-mono">{serverIP}</p>
              </div>
              <Button 
                onClick={copyIP} 
                className="glow-green bg-primary hover:bg-primary/80"
              >
                <Icon name={copiedIP ? "Check" : "Copy"} size={20} />
              </Button>
            </div>
          </Card>

          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary text-glow-green">247</p>
              <p className="text-muted-foreground">Игроков онлайн</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-secondary text-glow-purple">8500+</p>
              <p className="text-muted-foreground">Зарегистрировано</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-accent text-glow-blue">99.9%</p>
              <p className="text-muted-foreground">Аптайм</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow-purple text-secondary">
            О сервере
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-primary/50 hover:glow-green transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2 text-primary">Уникальные режимы</h3>
              <p className="text-muted-foreground">
                Survival, Creative, SkyBlock, PvP-арены и многое другое для разнообразия игры
              </p>
            </Card>
            <Card className="p-6 border-secondary/50 hover:glow-purple transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Защита территории</h3>
              <p className="text-muted-foreground">
                Надежная система приватов, чтобы ваши постройки были в безопасности
              </p>
            </Card>
            <Card className="p-6 border-accent/50 hover:glow-blue transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2 text-accent">Дружное комьюнити</h3>
              <p className="text-muted-foreground">
                Активные игроки, адекватная администрация и регулярные ивенты
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow-blue text-accent">
            Правила сервера
          </h2>
          <Card className="p-8 border-accent/50 glow-blue">
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Badge className="bg-accent text-accent-foreground shrink-0">{index + 1}</Badge>
                  <p className="text-lg">{rule}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section id="donate" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow-green text-primary">
            Донат-пакеты
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {donatePackages.map((pack, index) => (
              <Card 
                key={index} 
                className="p-6 border-primary/50 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-center p-4 rounded-lg bg-gradient-to-br ${pack.color} mb-4`}>
                  <h3 className="text-2xl font-bold">{pack.name}</h3>
                  <p className="text-3xl font-bold mt-2">{pack.price}</p>
                </div>
                <ul className="space-y-2">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 glow-green bg-primary hover:bg-primary/80">
                  Купить
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="leaderboard" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow-purple text-secondary">
            Таблица лидеров
          </h2>
          <Tabs defaultValue="time" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="time">По времени онлайна</TabsTrigger>
              <TabsTrigger value="achievements">По достижениям</TabsTrigger>
            </TabsList>
            <TabsContent value="time">
              <Card className="p-6 border-secondary/50 glow-purple">
                <div className="space-y-3">
                  {leaderboardData.map((player, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-all hover:scale-102 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className={`text-2xl font-bold w-12 text-center ${
                        player.rank === 1 ? 'text-yellow-400' :
                        player.rank === 2 ? 'text-gray-300' :
                        player.rank === 3 ? 'text-orange-400' :
                        'text-muted-foreground'
                      }`}>
                        {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : `#${player.rank}`}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">{player.name}</p>
                        <p className="text-sm text-muted-foreground">Уровень {player.level}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{player.online}</p>
                        <p className="text-sm text-muted-foreground">{player.achievements} достижений</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="achievements">
              <Card className="p-6 border-secondary/50 glow-purple">
                <div className="space-y-3">
                  {[...leaderboardData].sort((a, b) => b.achievements - a.achievements).map((player, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-all hover:scale-102 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className={`text-2xl font-bold w-12 text-center ${
                        index === 0 ? 'text-yellow-400' :
                        index === 1 ? 'text-gray-300' :
                        index === 2 ? 'text-orange-400' :
                        'text-muted-foreground'
                      }`}>
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-lg">{player.name}</p>
                        <p className="text-sm text-muted-foreground">Уровень {player.level}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-secondary">{player.achievements} 🏆</p>
                        <p className="text-sm text-muted-foreground">{player.online} онлайн</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="commands" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow-green text-primary">
            Полезные команды
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {commands.map((cmd, index) => (
              <Card 
                key={index}
                className="p-4 border-primary/50 hover:glow-green transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <Icon name="Terminal" size={24} className="text-primary shrink-0" />
                  <div>
                    <p className="font-mono font-bold text-primary">{cmd.cmd}</p>
                    <p className="text-sm text-muted-foreground">{cmd.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-12 text-glow-blue text-accent">
            Контакты
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-accent/50 hover:glow-blue transition-all hover:scale-105">
              <Icon name="MessageCircle" size={48} className="text-accent mx-auto mb-4" />
              <h3 className="font-bold mb-2">Discord</h3>
              <p className="text-muted-foreground">discord.gg/fildcube</p>
            </Card>
            <Card className="p-6 border-primary/50 hover:glow-green transition-all hover:scale-105">
              <Icon name="Send" size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Telegram</h3>
              <p className="text-muted-foreground">@fildcube_server</p>
            </Card>
            <Card className="p-6 border-secondary/50 hover:glow-purple transition-all hover:scale-105">
              <Icon name="Globe" size={48} className="text-secondary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Форум</h3>
              <p className="text-muted-foreground">forum.fildcube.ru</p>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-primary/20 bg-card/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 FildCube. Все права защищены. Minecraft является торговой маркой Mojang AB.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
