import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Clock, Headphones, Facebook, MessageCircle, Send } from "lucide-react";

const FlashConverter = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [usdtAmount, setUsdtAmount] = useState("");
  const [isWalletVerified, setIsWalletVerified] = useState(false);

  const conversionRate = 47.76;
  const flashAmount = usdtAmount ? (parseFloat(usdtAmount) * conversionRate).toFixed(2) : "0";

  const handleGetDemo = () => {
    setSelectedOption("demo");
    setUsdtAmount("1");
  };

  const handleCustomAmount = () => {
    setSelectedOption("custom");
    setUsdtAmount("");
  };

  const handleWalletVerification = () => {
    if (walletAddress.length > 10) {
      setIsWalletVerified(true);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-flash-orange-glow bg-clip-text text-transparent">
            WELCOME TO FLASH CONVERTER
          </h1>
          
          {!selectedOption && (
            <div className="max-w-md mx-auto">
              <p className="text-muted-foreground mb-8 text-lg">
                Choose how you'd like to proceed:
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleGetDemo}
                  variant="flash" 
                  size="lg" 
                  className="w-full text-lg py-6 animate-glow-pulse"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Get Demo (1 USDT = 47 FLASH)
                </Button>
                
                <Button 
                  onClick={handleCustomAmount}
                  variant="flashSecondary" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Get Flash with CUSTOM AMOUNT
                </Button>
              </div>
            </div>
          )}

          {selectedOption && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                {/* Converter Form */}
                <Card className="flash-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-primary">
                      USDT to Flash Converter
                    </CardTitle>
                    <p className="text-center text-muted-foreground">
                      Convert your USDT to Flash in seconds with our secure platform
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Your Trust Wallet Address
                      </label>
                      <Input
                        placeholder="Only Trust Wallet addresses are supported"
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        className="bg-input border-flash-border"
                      />
                      {walletAddress && !isWalletVerified && (
                        <Button 
                          onClick={handleWalletVerification}
                          variant="flash" 
                          size="sm" 
                          className="mt-2"
                        >
                          Verify Wallet
                        </Button>
                      )}
                      {isWalletVerified && (
                        <p className="text-sm text-primary mt-2">
                          ✓ Wallet verified and ready for conversion!
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        USDT Amount to Convert
                      </label>
                      <Input
                        type="number"
                        placeholder="Minimum of 20 USDT required"
                        value={usdtAmount}
                        onChange={(e) => setUsdtAmount(e.target.value)}
                        className="bg-input border-flash-border"
                        min="20"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        You Will Receive
                      </label>
                      <div className="bg-muted p-4 rounded-lg border border-flash-border">
                        <div className="text-3xl font-bold text-primary">
                          {flashAmount} <span className="text-lg">FLASH</span>
                        </div>
                      </div>
                    </div>

                    <Button 
                      variant="flash" 
                      size="lg" 
                      className="w-full text-lg font-bold"
                      disabled={!isWalletVerified || !usdtAmount || parseFloat(usdtAmount) < 20}
                    >
                      Pay Fee & GET FLASH
                    </Button>
                  </CardContent>
                </Card>

                {/* Conversion Rate Card */}
                <div className="space-y-6">
                  <Card className="flash-card">
                    <CardHeader>
                      <CardTitle className="text-center text-primary">CONVERSION RATE</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-4xl font-bold">1</div>
                        <div className="text-2xl text-muted-foreground">=</div>
                        <div className="text-4xl font-bold text-primary">{conversionRate}</div>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mb-4">
                        <span>USDT</span>
                        <span>FLASH</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        45 Days Validity • Best Value
                      </Badge>
                      <div className="mt-4 p-2 bg-muted rounded">
                        <div className="text-sm font-medium">USDT BEP-20</div>
                        <div className="text-xs text-muted-foreground">Binance Smart Chain</div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Live Stats */}
                  <Card className="flash-card">
                    <CardHeader>
                      <CardTitle className="text-center text-primary">Live Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Total Conversions:</span>
                        <span className="font-bold text-primary">1,245,876</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Current Rate:</span>
                        <span className="font-bold text-primary">1 USDT = {conversionRate} FLASH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Network Status:</span>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                          Active
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Why Choose Flash Sender
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="flash-card text-center">
            <CardContent className="p-6">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Instant Conversion</h3>
              <p className="text-muted-foreground">Get your Flash tokens in seconds</p>
            </CardContent>
          </Card>

          <Card className="flash-card text-center">
            <CardContent className="p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Military-Grade Security</h3>
              <p className="text-muted-foreground">Your funds are always protected</p>
            </CardContent>
          </Card>

          <Card className="flash-card text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lowest Fees</h3>
              <p className="text-muted-foreground">We charge minimal transaction fees</p>
            </CardContent>
          </Card>

          <Card className="flash-card text-center">
            <CardContent className="p-6">
              <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Our team is always available</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-flash-border py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              <Button variant="flashSecondary" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="flashSecondary" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button variant="flashSecondary" size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlashConverter;